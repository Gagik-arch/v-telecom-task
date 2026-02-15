import styles from './block.module.css';
import type { BlockProps } from './types';

const Block = ({ className = '', children }: BlockProps) => {
	return <div className={[styles.root, className].join(' ')}>{children}</div>;
};

export default Block;
