import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usersService } from '@/services';
import { useCallback, useEffect } from 'react';
import { useNotifyContext } from '@/hooks/index';
import { TPostFormValues } from '@/components';

const useRegisterUser = () => {
	const { open } = useNotifyContext();
	const queryClient = useQueryClient();

	const {
		mutate,
		data: userData,
		error,
		isPending: isRegisterPending
	} = useMutation({
		mutationFn: usersService.registerUser
	});

	useEffect(() => {
		if (error) {
			open({ message: error.message, variant: 'error' });
		}
	}, [open, error]);

	useEffect(() => {
		if (userData) {
			open({ message: userData.message, variant: 'success' });
		}
	}, [open, userData]);

	const registerUser = useCallback(
		(data: TPostFormValues) => {
			mutate(data, {
				onSuccess: () => {
					queryClient.invalidateQueries({ queryKey: [usersService.cacheKey] });
				}
			});
		},
		[mutate, queryClient]
	);

	return {
		registerUser,
		isRegisterPending
	};
};

export default useRegisterUser;
