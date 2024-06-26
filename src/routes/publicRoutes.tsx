import { ErrorPage } from '@/pages';
import { AppLayout } from '@/layouts';
import { HOME_PATH } from '@/utils';
import { HomeContainer } from '@/containers';

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
						element: <HomeContainer />
					}
				]
			}
		]
	}
];

export default publicRoutes;
