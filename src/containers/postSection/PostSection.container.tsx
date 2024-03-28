import React, { useEffect, useMemo } from 'react';
import { PostSection } from '@/pages';
import { TOption, TPostFormValues } from '@/components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { positionsService, usersService } from '@/services';
import { useNotifyContext } from '@/hooks';

const postFormDefaultValues = {
	name: '',
	email: '',
	phone: '',
	positionId: '',
	photo: null
};

const PostSectionContainer = () => {
	const { open } = useNotifyContext();
	const {
		data: positionsData,
		isLoading: isPositionsLoading,
		error: positionError
	} = useQuery({
		queryKey: [positionsService.cacheKey],
		queryFn: positionsService.fetchPositions
	});
	const {
		mutate,
		data: userData,
		error: userError,
		isPending: isUserPending
	} = useMutation({
		mutationFn: usersService.registerUser
	});

	const queryClient = useQueryClient();

	useEffect(() => {
		if (!userData) {
			return;
		}

		open({ message: userData.message, variant: 'success' });
	}, [open, userData]);

	useEffect(() => {
		if (positionError) {
			open({ message: positionError.message, variant: 'error' });
		}

		if (userError) {
			open({ message: userError.message, variant: 'error' });
		}
	}, [positionError, open, userError]);

	const onSubmit = (data: TPostFormValues) => {
		mutate(data, {
			onSuccess: () => {
				queryClient.invalidateQueries({ queryKey: [usersService.cacheKey] });
			}
		});
	};

	const prepareOptions = useMemo<TOption[]>(() => {
		if (!positionsData?.positions) {
			return [];
		}
		return positionsData.positions.map(item => ({
			label: item.name,
			value: item.id.toString()
		}));
	}, [positionsData?.positions]);

	return (
		<PostSection
			options={prepareOptions}
			title="Working with POST request"
			defaultValues={postFormDefaultValues}
			onSubmit={onSubmit}
			isLoading={isUserPending}
			isPositionsLoading={isPositionsLoading}
		/>
	);
};

export default PostSectionContainer;
