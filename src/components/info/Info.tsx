import { FC } from 'react';
import { TInfoProps, Typography } from '@/components';
import styles from './info.module.scss';

const Info: FC<TInfoProps> = ({ title, description, src }) => {
	return (
		<div className={styles.info}>
			<div className={styles.info__header}>
				<Typography variant="h1" as="h1" textAlign="center" text={title} />
				<Typography textAlign="center" text={description} />
			</div>
			<div className={styles.info__body}>
				<img src={src} alt="Info image" />
			</div>
		</div>
	);
};

export default Info;
