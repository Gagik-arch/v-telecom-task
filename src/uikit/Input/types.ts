import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	endContent?: ReactNode;
	startContent?: ReactNode;
};
