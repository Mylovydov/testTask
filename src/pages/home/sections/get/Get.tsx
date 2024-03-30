import React, { FC } from 'react';
import styles from './get.module.scss';
import {
	Button,
	EmptyState,
	RenderList,
	Spinner,
	TUserItemProps,
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
	const emptyStateMarkup = !isInitDataLoading && !hasItems && (
		<EmptyState title="No users found" />
	);
	const userItemsMarkup = !isInitDataLoading && hasItems && (
		<RenderList<TUserItemProps>
			items={items}
			listClassName={styles.getGrid}
			itemClassName={styles.getGrid__item}
			Component={UserItem}
		/>
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
				{emptyStateMarkup}
				{userItemsMarkup}
			</div>
			{buttonMarkup}
		</div>
	);
};

export default GetSection;
