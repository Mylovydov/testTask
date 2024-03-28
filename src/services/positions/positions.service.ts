import axios from 'axios';
import { $apiInstance, TFetchPositionsResponse } from '@/services';
import { TPosition } from '@/types';
import { TFetchPositionsReturn } from '@/services/positions/positions.types';

class PositionsService {
	cacheKey = 'positions';
	async fetchPositions(): Promise<TFetchPositionsReturn> {
		const data: { error: string | null; positions: TPosition[] } = {
			positions: [],
			error: null
		};
		try {
			const res = await $apiInstance.get<TFetchPositionsResponse>('/positions');
			console.log('res', res);

			if (!res.data.success) {
				return {
					...data,
					error: res.data.message || 'Something went wrong'
				};
			}

			return {
				...data,
				positions: res.data.positions
			};
		} catch (error) {
			if (axios.isAxiosError(error)) {
				throw new Error(error.message);
			}
			throw new Error('Something went wrong');
		}
	}
}

export default new PositionsService();
