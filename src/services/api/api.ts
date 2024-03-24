import axios from 'axios';

const baseURL = process.env.API_URL;

const $apiInstance = axios.create({ baseURL });
export default $apiInstance;
