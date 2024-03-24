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

export type TQueryFnData = {
	users: TUser[];
	nextPageUrl: string | null;
};
