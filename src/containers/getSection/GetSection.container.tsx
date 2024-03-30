import React, { useEffect, useMemo } from 'react';
import { GetSection } from '@/pages';
import { useInfiniteQuery } from '@tanstack/react-query';
import { usersService } from '@/services';
import { mergeUsers, sortUsersByRegistrationTimestamp } from '@/utils';
import { useNotifyContext } from '@/hooks';

const initialPage = '1';

const GetSectionContainer = () => {
	const { open } = useNotifyContext();
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status
	} = useInfiniteQuery({
		queryKey: [usersService.cacheKey],
		queryFn: usersService.fetchUsers,
		initialPageParam: initialPage,
		getNextPageParam: lastPage => {
			if (!lastPage.nextPageUrl) {
				return null;
			}
			return new URL(lastPage.nextPageUrl).searchParams.get('page');
		}
	});

	const userItems = useMemo(() => {
		return data ? sortUsersByRegistrationTimestamp(mergeUsers(data.pages)) : [];
	}, [data]);

	useEffect(() => {
		if (error) {
			open({ message: error.message, variant: 'error' });
		}
	}, [error, open]);

	const isDataFetching = isFetchingNextPage || isFetching;

	return (
		<GetSection
			title="Working with GET request"
			items={userItems}
			onFetchMore={fetchNextPage}
			isDataFetching={isDataFetching}
			isInitDataLoading={status === 'pending'}
			hasNextPage={hasNextPage}
		/>
	);
};

export default GetSectionContainer;
