import {
	createContext,
	type Dispatch,
	type SetStateAction,
	useEffect,
	useState,
} from 'react';
import type { Theme, ThemProviderProps } from './types';

export const ThemeContext = createContext<
	[Theme, Dispatch<SetStateAction<Theme>>]
>(['dark', () => {}]);

const ThemProvider = ({
	children,
	defaultTheme = 'dark',
}: ThemProviderProps) => {
	const [value, setValue] = useState<typeof defaultTheme>(defaultTheme);

	useEffect(() => {
		const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const fn = (event: MediaQueryListEvent) => {
			setValue(() => (event.matches ? 'dark' : 'light'));
		};

		colorSchemeQuery.addEventListener('change', fn);

		return () => {
			colorSchemeQuery.removeEventListener('change', fn);
		};
	}, []);

	useEffect(() => {
		const theme = document.getElementById('theme') as HTMLLinkElement;
		if (!theme) return;

		theme.href = `./src/providers/ThemProvider/resources/${value}.css`;
	}, [value]);

	return (
		<ThemeContext.Provider value={[value, setValue]}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemProvider;
