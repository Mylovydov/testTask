import React, { FC } from 'react';
import { TButtonProps, Typography } from '@/components';
import styles from './button.module.scss';
import { getClassName } from '@/utils';

const Button: FC<TButtonProps> = ({
	label,
	fullWidth,
	size = 'medium',
	...restBtnProps
}) => {
	const btmClasses = getClassName({
		[styles.button]: true,
		[styles.fullWidth]: fullWidth,
		[styles[size]]: size
	});

	return (
		<button className={btmClasses} {...restBtnProps}>
			<Typography classes={styles.label} text={label} noWrap />
		</button>
	);
};

export default Button;
