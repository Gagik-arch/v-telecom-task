import {
	type Dispatch,
	type SetStateAction,
	useContext,
	useEffect,
} from 'react';
import { ThemeContext } from './ThemProvider';
import type { Theme } from './types';

const useTheme = () => {
	const [value, setValue] = useContext(ThemeContext);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
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

	return [value, setValue] as [
		Theme,
		Dispatch<SetStateAction<'light' | 'dark'>>,
	];
};

export default useTheme;
