import axios from 'axios';
import {
	$apiInstance,
	TFetchUsersResponse,
	TRegisterUserResponse,
	TTokenResponse
} from '@/services';
import { TPostFormValues } from '@/components';
import { handleAxiosErrors } from '@/utils';

class UsersService {
	cacheKey = 'users';

	constructor() {
		this.registerUser = this.registerUser.bind(this);
	}

	async getToken() {
		try {
			const res = await $apiInstance.get<TTokenResponse>('/token');
			return {
				token: res.data.token
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
				handleAxiosErrors(error);
			}

			throw new Error('Something went wrong');
		}
	}

	async registerUser(data: TPostFormValues) {
		try {
			const formData = new FormData();
			formData.append('name', data.name);
			formData.append('email', data.email);
			formData.append('phone', data.phone);
			formData.append('position_id', data.positionId);
			data.photo && formData.append('photo', data.photo[0]);

			const { token } = await this.getToken();
			if (!token) {
				throw new Error('Failed to get token');
			}

			const res = await $apiInstance.post<TRegisterUserResponse>(
				'/users',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Token: token
					}
				}
			);

			return {
				userId: res.data.user_id,
				message: res.data.message
			};
		} catch (error) {
			if (axios.isAxiosError(error)) {
				handleAxiosErrors(error);
			}

			throw new Error('Something went wrong');
		}
	}
}

export default new UsersService();
