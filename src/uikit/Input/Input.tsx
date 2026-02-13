import { memo } from 'react';
import styles from './input.module.css';
import type { InputProps } from './types';

const Input = memo(
	({ type = 'text', endContent, startContent, ...props }: InputProps) => {
		return (
			<label className={styles.root}>
				{startContent}

				<input type={type} {...props} />

				{endContent}
			</label>
		);
	},
);

export default Input;
