import { TFieldControlProps } from '@/components';
import { PropsWithChildren } from 'react';

export type TOption = {
	value: string | number;
	label: string;
};

export type TRadioGroupProps = {
	label?: string;
} & PropsWithChildren &
	Omit<TFieldControlProps, 'children'>;
