import { createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from '@/routes';

export const appRouter = createBrowserRouter([...publicRoutes]);
