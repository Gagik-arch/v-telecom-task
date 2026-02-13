import type { ReactNode } from 'react';

export type DrawerProps = {
	children: ReactNode;
};

export interface DrawerRefType {
	close: () => void;
	open: () => void;
	isOpened: boolean;
}
