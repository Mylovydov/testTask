import { useQuery } from '@tanstack/react-query';
import { positionsService } from '@/services';
import { useEffect } from 'react';
import { useNotifyContext } from '@/hooks/index';

const useGetPositions = () => {
	const { open } = useNotifyContext();
	const {
		data: positionsData,
		isLoading: isPositionsLoading,
		error: positionError
	} = useQuery({
		queryKey: [positionsService.cacheKey],
		queryFn: positionsService.fetchPositions
	});

	useEffect(() => {
		if (positionError) {
			open({ message: positionError.message, variant: 'error' });
		}
	}, [open, positionError]);

	return {
		positionsData,
		isPositionsLoading
	};
};

export default useGetPositions;
