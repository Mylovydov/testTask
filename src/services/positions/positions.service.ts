import axios from 'axios';
import {
	$apiInstance,
	TFetchPositionsResponse,
	TFetchPositionsReturn
} from '@/services';
import { handleAxiosErrors } from '@/utils';

class PositionsService {
	cacheKey = 'positions';
	async fetchPositions(): Promise<TFetchPositionsReturn> {
		try {
			const res = await $apiInstance.get<TFetchPositionsResponse>('/positions');

			return {
				positions: res.data.positions
			};
		} catch (error) {
			if (axios.isAxiosError(error)) {
				handleAxiosErrors(error);
			}

			if (error instanceof Error) {
				throw new Error(error.message || 'Something went wrong');
			}

			throw new Error('Something went wrong');
		}
	}
}

export default new PositionsService();
