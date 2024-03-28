import { TUser } from '@/types';

export type TFetchUsersResponse = {
	success: boolean;
	total_pages: number;
	total_users: number;
	count: number;
	page: number;
	links: {
		next_url: string | null;
		prev_url: string | null;
	};
	users: TUser[];
};

export type TTokenResponse = {
	token: string;
	success: boolean;
};

export type TRegisterUserResponse = {
	success: boolean;
	user_id: number;
	message: string;
};

export type TQueryFnData = {
	users: TUser[];
	nextPageUrl: string | null;
};
