import React, { ChangeEvent, FC, useId, useState } from 'react';
import styles from './fileInput.module.scss';
import { FieldControl, Typography } from '@/components';
import { getClassName } from '@/utils';

type TFileInputProps = {
	error?: string;
	helperText?: string;
	label?: string;
} & React.HTMLAttributes<HTMLInputElement>;

const FileInput: FC<TFileInputProps> = ({ helperText, error, label, id }) => {
	const [file, setFile] = useState(null);
	const customId = useId();
	const inputId = id || customId;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files[0];
		setFile(selectedFile);
	};

	const fileInputClasses = getClassName({
		[styles.fileInput]: true,
		[styles.error]: !!error
	});

	return (
		<FieldControl error={error} helperText={helperText}>
			<label className={fileInputClasses} htmlFor={inputId}>
				<input
					type="file"
					id={inputId}
					onChange={handleChange}
					className={styles.fileInput__input}
				/>
				<button className={styles.fileInput__button}>Upload</button>
				<div className={styles.fileInput__content}>
					{file ? (
						<Typography>{file.name}</Typography>
					) : (
						<Typography classes={styles.fileInput__item}>{label}</Typography>
					)}
				</div>
			</label>
		</FieldControl>
	);
};

export default FileInput;
