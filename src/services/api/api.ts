import axios from 'axios';

const baseURL = process.env.RESOURCE_API_URL;
const $apiInstance = axios.create({
	baseURL: baseURL
});
export default $apiInstance;
