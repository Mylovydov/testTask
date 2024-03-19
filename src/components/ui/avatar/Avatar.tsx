import React, { FC } from 'react';
import styles from './avatar.module.scss';
import { getClassName } from '@/utils';
import { TAvatarProps, Typography } from '@/components';

const Avatar: FC<TAvatarProps> = ({ size = 'medium', src, initials }) => {
	const avatarClasses = getClassName({
		[styles.avatar]: true,
		[styles[size]]: size
	});

	const avatarMarkup = src ? (
		<img src={src} alt="Avatar" />
	) : (
		<span>
			<Typography variant="h1" as="p" light uppercase>
				{initials}
			</Typography>
		</span>
	);

	return <span className={avatarClasses}>{avatarMarkup}</span>;
};

export default Avatar;
