import React, { FC } from 'react';
import styles from './post.module.scss';
import { EmptyState, PostForm, Spinner, Typography } from '@/components';
import { TPostSectionProps } from '@/pages';

const PostSection: FC<TPostSectionProps> = ({
	postTitle,
	isPositionsLoading,
	options = [],
	...rest
}) => {
	const hasItems = !!options.length;

	const titleMarkup = postTitle && (
		<div className={styles.post__title}>
			<Typography variant="h1" textAlign="center">
				{postTitle}
			</Typography>
		</div>
	);

	const spinnerMarkup = isPositionsLoading && <Spinner />;
	const emptyStateMarkup = !isPositionsLoading && !hasItems && (
		<EmptyState title="No positions found" />
	);
	const formMarkup = !isPositionsLoading && hasItems && (
		<PostForm options={options} {...rest} />
	);
	return (
		<div className={styles.post}>
			{titleMarkup}
			<div className={styles.post__body}>
				{spinnerMarkup}
				{emptyStateMarkup}
				{formMarkup}
			</div>
		</div>
	);
};

export default PostSection;
