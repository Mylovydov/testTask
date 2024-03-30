import React, { forwardRef } from 'react';
import styles from './radio.module.scss';
import { TRadioProps, Typography } from '@/components';

const Radio = forwardRef<HTMLInputElement, TRadioProps>(
	({ label, ...rest }, ref) => {
		return (
			<label className={styles.radio}>
				<input
					{...rest}
					type="radio"
					className={styles.radio__input}
					ref={ref}
				/>
				<span className={styles.radio__custom} />
				<span className={styles.radio__label}>
					<Typography>{label}</Typography>
				</span>
			</label>
		);
	}
);

Radio.displayName = 'Radio';

export default Radio;
