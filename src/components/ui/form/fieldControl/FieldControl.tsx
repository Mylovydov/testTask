import React, { FC } from 'react';
import styles from './fieldControl.module.scss';
import { TFieldControlProps, Typography } from '@/components';

const FieldControl: FC<TFieldControlProps> = ({
	children,
	helperText,
	error
}) => {
	return (
		<div className={styles.fieldControl}>
			<div className={styles.fieldControl___input}>{children}</div>
			<div className={styles.fieldControl__helperText}>
				{helperText && <Typography variant="caption">{helperText}</Typography>}
			</div>
			<div className={styles.fieldControl__error}>
				{error && <Typography variant="caption">{error}</Typography>}
			</div>
		</div>
	);
};

export default FieldControl;
