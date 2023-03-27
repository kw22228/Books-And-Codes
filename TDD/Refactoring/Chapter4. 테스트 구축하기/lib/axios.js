import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://kw22228.github.io',
  withCredentials: true,
});

export { axiosInstance };
