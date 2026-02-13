import { memo } from 'react';
import styles from './button.module.css';
import type { ButtonProps } from './types';

const Button = memo(
	({
		children,
		variant = 'default',
		type = 'button',
		className = '',
		...props
	}: ButtonProps) => {
		return (
			<button
				type={type}
				className={`${styles.root} ${className} ${styles[variant]}`}
				{...props}
			>
				{children}
			</button>
		);
	},
);

export default Button;
