import { InputHTMLAttributes } from 'react';

export type TFileInputProps = {
	error?: string;
	helperText?: string;
	label?: string;
	btnLabel?: string;
	file?: File | null;
	onFileChange?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;
