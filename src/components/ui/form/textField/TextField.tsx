import React, { ChangeEvent, FC, useState } from 'react';
import styles from './textField.module.scss';
import { getClassName } from '@/utils';
import { FieldControl, TFieldControlProps, Typography } from '@/components';

export type TTextFieldProps = {
	label?: string;
	error?: string;
	helperText?: string;
} & TFieldControlProps;

const TextField: FC<TTextFieldProps> = ({ label, error, helperText }) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setIsFilled(event.target.value !== '');
	};

	const textFieldClasses = getClassName({
		[styles.textField]: true,
		[styles.active]: isFocused || isFilled,
		[styles.error]: !!error
	});

	return (
		<FieldControl error={error} helperText={helperText}>
			<div className={textFieldClasses}>
				<label className={styles.textField__label}>
					{label && <Typography as="span">{label}</Typography>}
				</label>
				<div className={styles.textField__inputWrapper}>
					<input
						className={styles.textField__input}
						type="text"
						onFocus={handleFocus}
						onBlur={handleBlur}
						onChange={handleChange}
					/>
					{label && (
						<legend className={styles.textField__legend}>
							<span>{label}</span>
						</legend>
					)}
				</div>
			</div>
		</FieldControl>
	);
};

export default TextField;
