import { TPosition } from '@/types';

export type TFetchPositionsResponse = {
	success: boolean;
	positions: TPosition[];
	message?: string;
};

export type TFetchPositionsReturn = {
	error: string | null;
	positions: TPosition[];
};
