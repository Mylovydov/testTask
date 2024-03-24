import React, { FC } from 'react';
import styles from './radio.module.scss';
import { Typography } from '@/components';

export type TRadioProps = {
	label?: string;
	checked?: boolean;
	onChange?: () => void;
};

const Radio: FC<TRadioProps> = ({ label, checked, onChange }) => {
	return (
		<label className={styles.radio}>
			<input
				type="radio"
				checked={checked}
				onChange={onChange}
				className={styles.radio__input}
			/>
			<span className={styles.radio__custom} />
			<span className={styles.radio__label}>
				<Typography>{label}</Typography>
			</span>
		</label>
	);
};

export default Radio;
