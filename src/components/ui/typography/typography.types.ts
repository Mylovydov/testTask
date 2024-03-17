import { ReactNode } from 'react';
import IntrinsicElements = JSX.IntrinsicElements;

export type TBaseTypographyProps = {
	variant?: 'h1' | 'body' | 'button';
	weight?: 'small' | 'regular' | 'medium' | 'semi' | 'bold';
	classes?: string;
	noWrap?: boolean;
	light?: boolean;
	textAlign?: 'left' | 'center' | 'right';
	uppercase?: boolean;
	as?: keyof IntrinsicElements;
};

export type TTypographyProps = TBaseTypographyProps &
	(
		| {
				text: string | ReactNode;
				children?: ReactNode;
		  }
		| {
				text?: string | ReactNode;
				children: ReactNode;
		  }
	);
