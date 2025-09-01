import { useState, useEffect, useCallback } from 'react';

const useApi = (url, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, method, body]); // Dependencies for useCallback

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Dependency for useEffect

  return { data, loading, error, refetch: fetchData };
};

export default useApi;

// import React from 'react';
// import useApi from './useApi'; // Assuming useApi.js is in the same directory

// function UserList() {
//   const { data: users, loading, error, refetch } = useApi('https://api.example.com/users');

//   if (loading) {
//     return <div>Loading users...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Users</h1>
//       <button onClick={refetch}>Refresh Users</button>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function PostCreator() {
//   const { data: postResponse, loading, error, refetch: createPost } = useApi(
//     'https://api.example.com/posts',
//     'POST',
//     { title: 'New Post', content: 'This is a new post.' }
//   );

//   const handleCreatePost = () => {
//     createPost(); // Call the refetch function to trigger the POST request
//   };

//   return (
//     <div>
//       <h2>Create New Post</h2>
//       <button onClick={handleCreatePost} disabled={loading}>
//         {loading ? 'Creating...' : 'Create Post'}
//       </button>
//       {postResponse && <p>Post created: {JSON.stringify(postResponse)}</p>}
//       {error && <p>Error creating post: {error.message}</p>}
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <div>
//       <UserList />
//       <PostCreator />
//     </div>
//   );
// }

// apiService.js
// import API_CONFIG from './config.js';

// async function getUsers() {
//   try {
//     const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.users}`, {
//       method: 'GET',
//       headers: {
//         ...API_CONFIG.commonHeaders,
//         'Authorization': `Bearer ${API_CONFIG.apiKey}` // Example of using API key
//       },
//       timeout: API_CONFIG.timeout,
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     throw error;
//   }
// }

// Example usage
// getUsers().then(users => console.log(users)).catch(err => console.error(err));
