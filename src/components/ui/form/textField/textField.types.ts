import { TFieldControlProps } from '@/components';
import { JSX } from 'react/jsx-runtime';
import IntrinsicElements = JSX.IntrinsicElements;

export type TTextFieldProps = {
	label?: string;
	error?: string;
	helperText?: string;
	fullWidth?: boolean;
} & IntrinsicElements['input'] &
	Omit<TFieldControlProps, 'children'>;
