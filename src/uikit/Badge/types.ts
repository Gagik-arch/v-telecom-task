import type { ReactNode } from 'react';

export type Variant = 'success' | 'danger' | 'default' | 'info' | 'warning';

export type BadgeProps = {
	variant: Variant;
	children: ReactNode;
	rounded?: number;
};
