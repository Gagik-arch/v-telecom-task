import { memo } from 'react';
import styles from './input.module.css';
import type { InputProps } from './types';

const Input = memo(
	({
		type = 'text',
		endContent,
		startContent,
		className = '',
		variant = 'default',
		...props
	}: InputProps) => {
		return (
			<label className={[styles.root, className, styles[variant]].join(' ')}>
				{startContent}

				<input type={type} {...props} />

				{endContent}
			</label>
		);
	},
);

export default Input;
