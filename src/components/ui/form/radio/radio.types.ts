import { ChangeEvent } from 'react';

export type TRadioProps = {
	label?: string;
	value?: string | number;
	checked?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	name?: string;
};
