import React, { ChangeEvent, FocusEvent, forwardRef, useState } from 'react';
import styles from './textField.module.scss';
import { getClassName } from '@/utils';
import { FieldControl, TTextFieldProps, Typography } from '@/components';

const TextField = forwardRef<HTMLInputElement, TTextFieldProps>(
	(
		{ label, error, helperText, fullWidth, onFocus, onBlur, onChange, ...rest },
		ref
	) => {
		const [isFocused, setIsFocused] = useState(false);
		const [isFilled, setIsFilled] = useState(false);

		const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
			setIsFocused(true);
			onFocus && onFocus(e);
		};

		const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
			setIsFocused(false);
			onBlur && onBlur(e);
		};

		const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
			setIsFilled(event.target.value !== '');
			onChange && onChange(event);
		};

		const textFieldClasses = getClassName({
			[styles.textField]: true,
			[styles.active]: isFocused || isFilled,
			[styles.error]: !!error,
			[styles.fullWidth]: fullWidth
		});

		return (
			<FieldControl error={error} helperText={helperText}>
				<div className={textFieldClasses}>
					<label className={styles.textField__label}>
						{label && <Typography as="span">{label}</Typography>}
					</label>
					<div className={styles.textField__inputWrapper}>
						<input
							{...rest}
							className={styles.textField__input}
							type="text"
							onFocus={handleFocus}
							onBlur={handleBlur}
							onChange={handleChange}
							ref={ref}
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
	}
);

export default TextField;
