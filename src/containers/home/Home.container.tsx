import React, { useCallback, useMemo } from 'react';
import { useGetPositions, useGetUsers, useRegisterUser } from '@/hooks';
import { mergeUsers, sortUsersByRegistrationTimestamp } from '@/utils';
import { HomePage } from '@/pages';
import { TOption, TPostFormValues } from '@/components';

const postFormDefaultValues = {
	name: '',
	email: '',
	phone: '',
	positionId: '',
	photo: null
};

const HomeContainer = () => {
	const { positionsData, isPositionsLoading } = useGetPositions();
	const { registerUser, isRegisterPending } = useRegisterUser();
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
		onResetQuery
	} = useGetUsers();

	const handleSubmit = useCallback(
		(data: TPostFormValues) => {
			registerUser(data);
			onResetQuery();
		},
		[onResetQuery, registerUser]
	);

	const prepareOptions = useMemo<TOption[]>(() => {
		if (!positionsData?.positions) {
			return [];
		}
		return positionsData.positions.map(item => ({
			label: item.name,
			value: item.id.toString()
		}));
	}, [positionsData?.positions]);

	const users = useMemo(() => {
		return data ? sortUsersByRegistrationTimestamp(mergeUsers(data.pages)) : [];
	}, [data]);

	const isUsersFetching = isFetchingNextPage || isFetching;

	return (
		<HomePage
			getTitle="Working with GET request"
			users={users}
			onFetchMore={fetchNextPage}
			isDataFetching={isUsersFetching}
			isInitDataLoading={status === 'pending'}
			hasNextPage={hasNextPage}
			options={prepareOptions}
			//Post section props
			postTitle="Working with POST request"
			defaultValues={postFormDefaultValues}
			onSubmit={handleSubmit}
			isLoading={isRegisterPending}
			isPositionsLoading={isPositionsLoading}
		/>
	);
};

export default HomeContainer;
