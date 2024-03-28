import { TOption } from '@/components';

export type TPostFormValues = {
	name: string;
	email: string;
	phone: string;
	positionId: string;
	photo: string;
};

export type TPostFormProps = {
	defaultValues: TPostFormValues;
	onSubmit?: (data: TPostFormValues) => void;
	isLoading?: boolean;
	options: TOption[];
};
