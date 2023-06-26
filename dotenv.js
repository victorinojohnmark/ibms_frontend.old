import dotenv from 'dotenv';
dotenv.config();

// Export the loaded environment variables
export default {
  env: process.env
};