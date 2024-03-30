import { TPosition } from '@/types';

export type TFetchPositionsResponse = {
	success: boolean;
	positions: TPosition[];
};

export type TErrorResponse = {
	success: boolean;
	message: string;
	fails: object;
};

export type TFetchPositionsReturn = {
	positions: TPosition[];
};
