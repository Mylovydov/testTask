import { useMemo } from 'react';
import { SnackbarProviderProps } from 'notistack';
import { NotifyProvider } from '@/providers';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const MainProvider = () => {
	const notifyOpt = useMemo(
		(): SnackbarProviderProps => ({
			maxSnack: 3,
			autoHideDuration: 3000,
			preventDuplicate: true,
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'center'
			},
			style: {
				fontSize: '1.6rem',
				fontWeight: 600
			}
		}),
		[]
	);

	return (
		<QueryClientProvider client={queryClient}>
			<NotifyProvider {...notifyOpt}>
				<RouterProvider router={appRouter} />
			</NotifyProvider>
		</QueryClientProvider>
	);
};

export default MainProvider;
