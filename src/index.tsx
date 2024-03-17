import { createRoot } from 'react-dom/client';
import '@/styles/globals.scss';
import { MainProvider } from '@/providers';

const root = document.getElementById('root');
if (!root) {
	throw new Error('Root element not found');
}

const container = createRoot(root);
container.render(<MainProvider />);
