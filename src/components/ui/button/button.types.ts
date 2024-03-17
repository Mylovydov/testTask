import React from 'react';

export type TButtonProps = {
	label: string;
	fullWidth?: boolean;
	size?: 'medium';
} & React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;
