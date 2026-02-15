import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export type Variant = 'default' | 'primary' | 'secondary';

export type ButtonProps = Partial<MouseEventHandler<HTMLButtonElement>> &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		children?: ReactNode;
		variant?: Variant;
	};
