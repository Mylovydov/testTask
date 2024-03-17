import React, { FC } from 'react';
import { Card, TUserItemProps, Typography } from '@/components';
import styles from './userItem.module.scss';

const UserItem: FC<TUserItemProps> = ({ name, position, email, phone }) => {
	return (
		<Card>
			<div className={styles.userItem}>
				<div className={styles.userItem__avatar}>
					<div
						style={{
							width: '7rem',
							height: '7rem',
							borderRadius: '50%',
							backgroundColor: 'gray'
						}}
					/>
				</div>
				<div className={styles.userItem__name}>
					<Typography textAlign="center">{name}</Typography>
				</div>
				<div className={styles.userItem__info}>
					<Typography textAlign="center">{position}</Typography>
					<Typography textAlign="center">{email}</Typography>
					<Typography textAlign="center">{phone}</Typography>
				</div>
			</div>
		</Card>
	);
};

export default UserItem;
