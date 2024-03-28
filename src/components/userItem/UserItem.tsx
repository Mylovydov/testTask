import React, { FC } from 'react';
import { Avatar, Card, TUserItemProps, Typography } from '@/components';
import styles from './userItem.module.scss';
import { truncateText } from '@/utils';

const UserItem: FC<TUserItemProps> = ({
	name,
	position,
	email,
	phone,
	photo
}) => (
	<Card>
		<div className={styles.userItem}>
			<div className={styles.userItem__avatar}>
				<div>
					<Avatar src={photo} initials={name?.[0] || 'A'} />
				</div>
			</div>
			<div className={styles.userItem__name}>
				<Typography textAlign="center">{truncateText(name)}</Typography>
			</div>
			<div className={styles.userItem__info}>
				<Typography textAlign="center">{truncateText(position)}</Typography>
				<Typography textAlign="center">{truncateText(email)}</Typography>
				<Typography textAlign="center">{truncateText(phone)}</Typography>
			</div>
		</div>
	</Card>
);

export default UserItem;
