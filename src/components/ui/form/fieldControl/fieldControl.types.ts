import { PropsWithChildren } from 'react';

export type TFieldControlProps = {
	helperText?: string;
	error?: string;
} & PropsWithChildren;
