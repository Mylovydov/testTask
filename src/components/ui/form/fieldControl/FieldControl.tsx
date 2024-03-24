import React, { FC, PropsWithChildren } from 'react';
import styles from './fieldControl.module.scss';
import { Typography } from '@/components';

export type TFieldControlProps = {
	helperText?: string;
	error?: string;
} & PropsWithChildren;

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
