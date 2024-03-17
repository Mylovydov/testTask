import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from '@/components';
import '@/styles/globals.scss';

const root = document.getElementById('root');
if (!root) {
	throw new Error('Root element not found');
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	}
]);

const container = createRoot(root);
container.render(<RouterProvider router={router} />);
