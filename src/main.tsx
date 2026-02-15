import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ThemProvider from '$providers/ThemProvider';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemProvider>
			<App />
		</ThemProvider>
	</StrictMode>,
);
