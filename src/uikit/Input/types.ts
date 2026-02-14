import type { InputHTMLAttributes, ReactNode } from 'react';

export type Variant = 'default' | 'bordered';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	endContent?: ReactNode;
	startContent?: ReactNode;
	className?: string;
	variant?: Variant;
};
