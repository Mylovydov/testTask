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
	users = [],
	onFetchMore,
	isDataFetching = false,
	isInitDataLoading = false,
	hasNextPage = false,
	getTitle
}) => {
	const hasItems = !!users.length;

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
			items={users}
			listClassName={styles.getGrid}
			itemClassName={styles.getGrid__item}
			Component={UserItem}
		/>
	);
	const titleMarkup = getTitle && (
		<div className={styles.get__title}>
			<Typography variant="h1" textAlign="center">
				{getTitle}
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
