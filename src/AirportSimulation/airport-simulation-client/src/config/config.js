// config.js

const API_CONFIG = {
  // Base URL for the API
  baseURL: "https://api.example.com/v1",

  // API Endpoints
  endpoints: {
    users: "/users",
    products: "/products",
    orders: "/orders",
  },

  // API Keys or other sensitive information (handled carefully)
  // For production, these should ideally come from environment variables
  apiKey: "your_api_key_here", 

  // Timeout for API requests (in milliseconds)
  timeout: 10000, 

  // Headers to be sent with every request
  commonHeaders: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },

  // Environment-specific settings (example)
  environment: process.env.NODE_ENV || "development", // Set by build process/environment variables
};

// Export the configuration for use in other modules
export default API_CONFIG;