import axios from 'axios';

const baseURL = process.env.RESOURCE_API_URL;

const $apiInstance = axios.create({
	baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1'
});
export default $apiInstance;
