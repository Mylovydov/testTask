import axios from 'axios';
import { $apiInstance, TFetchUsersResponse } from '@/services';

class UsersService {
	cacheKey = 'users';
	async fetchUsers({ pageParam }: { pageParam: string }) {
		try {
			const res = await $apiInstance.get<TFetchUsersResponse>(
				`/users?page=${pageParam}&count=6`
			);
			return {
				users: res.data.users,
				nextPageUrl: res.data.links.next_url
			};
		} catch (error) {
			if (axios.isAxiosError(error)) {
				throw new Error(error.message);
			}
			throw new Error('Something went wrong');
		}
	}
}

export default new UsersService();
