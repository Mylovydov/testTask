import { FC } from 'react';
import { TEmptyStateProps, Typography } from '@/components';
import styles from './emptyState.module.scss';

const EmptyState: FC<TEmptyStateProps> = ({ title, description }) => {
	return (
		<div className={styles.emptyState}>
			<div className={styles.emptyState__title}>
				<Typography variant="h1" as="h5" textAlign="center">
					{title}
				</Typography>
			</div>
			{description && (
				<div className={styles.emptyState__description}>
					<Typography textAlign="center">{description}</Typography>
				</div>
			)}
		</div>
	);
};

export default EmptyState;
