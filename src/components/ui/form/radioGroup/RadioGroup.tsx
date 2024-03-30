import React, { FC } from 'react';
import styles from './radioGroup.module.scss';
import { FieldControl, TRadioGroupProps, Typography } from '@/components';

const RadioGroup: FC<TRadioGroupProps> = ({
	label,
	helperText,
	error,
	children
}) => (
	<FieldControl error={error} helperText={helperText}>
		<div className={styles.radioGroup}>
			<div className={styles.radioGroup__label}>
				<Typography>{label}</Typography>
			</div>
			<div className={styles.radioGroup__group}>{children}</div>
		</div>
	</FieldControl>
);

export default RadioGroup;
