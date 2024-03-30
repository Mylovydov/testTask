import { TBaseModel } from '@/types';

export type TUser = TBaseModel & {
	name: string;
	email: string;
	phone: string;
	position: string;
	position_id: number;
	registration_timestamp: number;
	photo: string;
};
