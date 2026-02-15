import type { ReactNode } from 'react';

export type ThemProviderProps = {
	children: ReactNode;
	defaultTheme: Theme;
};

export type Theme = 'light' | 'dark';
