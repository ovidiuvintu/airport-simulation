
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

const BASE_URL = 'https://api.example.com'; 

export const Get = async (endpoint) => {
    axios.get(`${BASE_URL}/${endpoint}`)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
  });
};

export const GetData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong!');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call error:', error);
    throw error; 
  }
};


const cache = setupCache({
  maxAge: 3 * 60 * 1000 // Three minutes
})

const instance = axios.create({
  adapter: cache.adapter,
  baseURL: `${BASE_URL}`
})

export const fetchJobsByCategory = category =>
  instance.get(`/github/jobs/${category}`).then(res => res.data)

export const fetchJob = (ownerName, issueNumber) =>
  instance
    .get(`/github/jobs/repository/${ownerName}/${issueNumber}`)
    .then(res => res.data)

export default instance