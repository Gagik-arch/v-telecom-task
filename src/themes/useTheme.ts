import { useEffect, useState } from 'react';

const useTheme = (defaultTheme: 'light' | 'dark' = 'dark') => {
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
		import(`./resources/${value}.css`);
	}, [value]);

	return [value, setValue];
};

export default useTheme;
