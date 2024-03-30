import { TErrorResponse } from '@/services/positions/positions.types';
import { AxiosError } from 'axios';

const handleFails = (fails = {}) => {
	const errors = Object.entries(fails).map(
		([key, value]) => `${key}: ${value}`
	);
	return errors.join(', ');
};

const handleAxiosErrors = <TError extends TErrorResponse>(
	error: AxiosError<TError>
) => {
	switch (error.response?.status) {
		case 401:
			throw new Error(error.response?.data?.message || 'Unauthorized');
		case 404:
			throw new Error(error.response?.data?.message || 'Not found');
		case 422:
			throw new Error(
				`${error.response?.data?.message || 'Invalid data'}: ${handleFails(error.response?.data?.fails)}` ||
					'Invalid data'
			);
		default:
			throw new Error(error.response?.data?.message || 'Failed to fetch');
	}
};

export default handleAxiosErrors;
