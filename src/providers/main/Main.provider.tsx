import { useMemo } from 'react';
import { SnackbarProviderProps } from 'notistack';
import { NotifyProvider } from '@/providers';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from '@/routes';

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
		<NotifyProvider {...notifyOpt}>
			<RouterProvider router={appRouter} />
		</NotifyProvider>
	);
};

export default MainProvider;
