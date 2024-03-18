import React from 'react';
import styles from './get.module.scss';
import { Button, TUserItemProps, Typography, UserItem } from '@/components';

const items: TUserItemProps[] = [
	{
		name: 'Salvador Stewart Flynn Thomas Salva Salve...',
		position: 'Leading specialist of the department of cent...',
		email: 'frontend_develop@gmail.com',
		phone: '+38 (098) 278 44 24'
	},
	{
		name: 'Salvador Stewart Flynn Thomas Salva Salve...',
		position: 'Leading specialist of the department of cent...',
		email: 'frontend_develop@gmail.com',
		phone: '+38 (098) 278 44 24'
	},
	{
		name: 'Salvador Stewart Flynn Thomas Salva Salve...',
		position: 'Leading specialist of the department of cent...',
		email: 'frontend_develop@gmail.com',
		phone: '+38 (098) 278 44 24'
	},
	{
		name: 'Salvador Stewart Flynn Thomas Salva Salve...',
		position: 'Leading specialist of the department of cent...',
		email: 'frontend_develop@gmail.com',
		phone: '+38 (098) 278 44 24'
	},
	{
		name: 'Salvador Stewart Flynn Thomas Salva Salve...',
		position: 'Leading specialist of the department of cent...',
		email: 'frontend_develop@gmail.com',
		phone: '+38 (098) 278 44 24'
	},
	{
		name: 'Salvador Stewart Flynn Thomas Salva Salve...',
		position: 'Leading specialist of the department of cent...',
		email: 'frontend_develop@gmail.com',
		phone: '+38 (098) 278 44 24'
	}
];

const GetSection = () => {
	return (
		<div className={styles.get}>
			<div className={styles.get__title}>
				<Typography variant="h1" textAlign="center">
					Working with GET request
				</Typography>
			</div>
			<div className={styles.get__body}>
				<ul className={styles.getGrid}>
					{items.map((item, index) => (
						<li className={styles.getGrid__item} key={index}>
							<UserItem {...item} />
						</li>
					))}
				</ul>
			</div>
			<div className={styles.get__action}>
				<Button label="Show more" />
			</div>
		</div>
	);
};

export default GetSection;
