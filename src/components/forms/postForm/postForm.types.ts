import { TOption } from '@/components';

export type TPostFormValues = {
	name: string;
	email: string;
	phone: string;
	positionId: string;
	photo: File | null;
};

export type TPostFormProps = {
	defaultValues: TPostFormValues;
	onSubmit?: (data: TPostFormValues) => void;
	isPositionsLoading?: boolean;
	isLoading?: boolean;
	options: TOption[];
};
