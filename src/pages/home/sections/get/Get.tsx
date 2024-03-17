import React from 'react';
import styles from './get.module.scss';
import { Button, Typography, UserItem } from '@/components';

const GetSection = () => {
	return (
		<div className={styles.get}>
			<div className={styles.get__title}>
				<Typography variant="h1" textAlign="center">
					Working with GET request
				</Typography>
			</div>
			<div className={styles.get__body}>
				<UserItem
					name="Salvador Stewart Flynn Thomas Salva Salve..."
					position="Leading specialist of the department of cent..."
					email="frontend_develop@gmail.com"
					phone="+38 (098) 278 44 24"
				/>
			</div>
			<div className={styles.get__action}>
				<Button label="Show more" />
			</div>
		</div>
	);
};

export default GetSection;
