import React, { FC } from 'react';
import styles from './get.module.scss';
import {
	Button,
	EmptyState,
	Spinner,
	Typography,
	UserItem
} from '@/components';
import { TGetSectionProps } from '@/pages';

const GetSection: FC<TGetSectionProps> = ({
	items = [],
	onFetchMore,
	isDataFetching = false,
	isInitDataLoading = false,
	hasNextPage = false,
	title
}) => {
	const hasItems = !!items.length;

	const buttonMarkup = hasItems && hasNextPage && (
		<div className={styles.get__action}>
			<Button
				onClick={onFetchMore}
				disabled={isDataFetching}
				label="Show more"
			/>
		</div>
	);

	const spinnerMarkup = isInitDataLoading && <Spinner />;

	const userItemsMarkup =
		!isInitDataLoading && hasItems ? (
			<ul className={styles.getGrid}>
				{items.map(item => (
					<li className={styles.getGrid__item} key={item.id}>
						<UserItem {...item} />
					</li>
				))}
			</ul>
		) : (
			<EmptyState title="No users found" />
		);

	const titleMarkup = title && (
		<div className={styles.get__title}>
			<Typography variant="h1" textAlign="center">
				{title}
			</Typography>
		</div>
	);

	return (
		<div className={styles.get}>
			{titleMarkup}
			<div className={styles.get__body}>
				{spinnerMarkup}
				{userItemsMarkup}
			</div>
			{buttonMarkup}
		</div>
	);
};

export default GetSection;
