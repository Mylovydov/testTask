import React, { FC } from 'react';
import styles from './get.module.scss';
import { Button, TUserItemProps, Typography, UserItem } from '@/components';
import Spinner from '../../../../components/ui/spinner/Spinner';
import EmptyState from '../../../../components/emptyState/EmptyState';

export type TGetSectionProps = {
	items: TUserItemProps[];
	onFetchMore: () => void;
	isDataFetching?: boolean;
	isInitDataLoading?: boolean;
	hasNextPage?: boolean;
};

const GetSection: FC<TGetSectionProps> = ({
	items = [],
	onFetchMore,
	isDataFetching = false,
	isInitDataLoading = false,
	hasNextPage = false
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
	return (
		<div className={styles.get}>
			<div className={styles.get__title}>
				<Typography variant="h1" textAlign="center">
					Working with GET request
				</Typography>
			</div>
			<div className={styles.get__body}>
				{spinnerMarkup}
				{userItemsMarkup}
			</div>
			{buttonMarkup}
		</div>
	);
};

export default GetSection;
