import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { usersService } from '@/services';
import { useNotifyContext } from '@/hooks/index';
import { useCallback, useEffect } from 'react';

const useGetUsers = (searchParamKey = 'page', initialPage = '1') => {
	const { open } = useNotifyContext();
	const queryClient = useQueryClient();

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
			return new URL(lastPage.nextPageUrl).searchParams.get(searchParamKey);
		}
	});

	const onResetQuery = useCallback(() => {
		queryClient.resetQueries({
			queryKey: [usersService.cacheKey],
			exact: true
		});
	}, [queryClient]);

	useEffect(() => {
		if (error) {
			open({ message: error.message, variant: 'error' });
		}
	}, [open, error]);

	return {
		data,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status,
		onResetQuery
	};
};

export default useGetUsers;
