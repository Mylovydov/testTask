import { ErrorPage, HomePage } from '@/pages';
import { AppLayout } from '@/layouts';
import { HOME_PATH } from '@/utils';

const publicRoutes = [
	{
		path: HOME_PATH,
		element: <AppLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						element: <HomePage />
					}
				]
			}
		]
	}
];

export default publicRoutes;
