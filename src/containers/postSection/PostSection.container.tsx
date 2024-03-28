import React, { useEffect, useMemo } from 'react';
import { PostSection } from '@/pages';
import { TOption, TPostFormValues } from '@/components';
import { useQuery } from '@tanstack/react-query';
import { positionsService } from '@/services';
import { useNotifyContext } from '@/hooks';

const postFormDefaultValues = {
	name: '',
	email: '',
	phone: '',
	positionId: '',
	photo: ''
};

const PostSectionContainer = () => {
	const { open } = useNotifyContext();
	const { data, isLoading, error } = useQuery({
		queryKey: [positionsService.cacheKey],
		queryFn: positionsService.fetchPositions
	});

	useEffect(() => {
		if (error) {
			return open({ message: error.message, variant: 'error' });
		}
	}, [error, open]);

	useEffect(() => {
		if (!data) {
			return;
		}

		if (data.error) {
			open({ message: data.error, variant: 'error' });
		}
	}, [data, open]);

	const onSubmit = (data: TPostFormValues) => {
		console.log(data);
	};

	const prepareOptions = useMemo<TOption[]>(() => {
		if (!data?.positions) {
			return [];
		}
		return data.positions.map(item => ({
			label: item.name,
			value: item.id.toString()
		}));
	}, [data?.positions]);

	return (
		<PostSection
			options={prepareOptions}
			title="Working with POST request"
			defaultValues={postFormDefaultValues}
			onSubmit={onSubmit}
			isLoading={isLoading}
		/>
	);
};

export default PostSectionContainer;
