import { memo } from 'react';
import styles from './badge.module.css';
import type { BadgeProps } from './types';

function Badge({ variant = 'default', rounded = 3, children }: BadgeProps) {
	return (
		<span
			className={[styles.root, styles[variant]].join(' ')}
			style={{
				borderRadius: rounded,
			}}
		>
			{children}
		</span>
	);
}

export default memo(Badge);
