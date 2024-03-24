import React, { useState } from 'react';
import styles from './textField.module.scss';
import { getClassName } from '@/utils';
import { Typography } from '@/components';

const TextField = () => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const textFieldClasses = getClassName({
		[styles.textField]: true,
		[styles.active]: isFocused
	});

	// return (
	// 	<label className={textFieldClasses}>
	// 		<input
	// 			className={styles.textField__input}
	// 			type="text"
	// 			onFocus={handleFocus}
	// 			onBlur={handleBlur}
	// 		/>
	// 		<div className={styles.textField__wrapper}>
	// 			<div className={styles.textField__left}></div>
	// 			<div className={styles.textField__center}></div>
	// 		</div>
	// 	</label>
	// );

	return (
		<div className={textFieldClasses}>
			<label className={styles.textField__label}>
				<Typography as="span">label</Typography>
			</label>
			<div className={styles.textField__inputWrapper}>
				<input
					className={styles.textField__input}
					type="text"
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
				<legend className={styles.textField__legend}>
					<span>label</span>
				</legend>
			</div>
		</div>
	);
};

export default TextField;
