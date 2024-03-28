import React, { FC } from 'react';
import styles from './post.module.scss';
import { EmptyState, PostForm, Spinner, Typography } from '@/components';
import { TPostSectionProps } from '@/pages';

const PostSection: FC<TPostSectionProps> = ({
	title,
	isLoading,
	options = [],
	...rest
}) => {
	const hasItems = !!options.length;

	const titleMarkup = title && (
		<div className={styles.post__title}>
			<Typography variant="h1" textAlign="center">
				{title}
			</Typography>
		</div>
	);

	const spinnerMarkup = isLoading && <Spinner />;

	const formMarkup =
		!isLoading && hasItems ? (
			<PostForm options={options} {...rest} />
		) : (
			<EmptyState title="No positions found" />
		);

	return (
		<div className={styles.post}>
			{titleMarkup}
			<div className={styles.post__body}>
				{spinnerMarkup}
				{formMarkup}
			</div>
		</div>
	);
};

export default PostSection;
