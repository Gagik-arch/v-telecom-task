import {
	forwardRef,
	type MouseEvent,
	memo,
	useImperativeHandle,
	useState,
} from 'react';
import { createPortal } from 'react-dom';
import styles from './drawer.module.css';
import type { DrawerProps, DrawerRefType } from './types';

const Drawer = forwardRef<DrawerRefType, DrawerProps>(({ children }, ref) => {
	const [isHidden, setIsHidden] = useState(true);

	const onClose = () => {
		setIsHidden(true);
	};

	useImperativeHandle(ref, () => ({
		close: onClose,
		open: () => {
			setIsHidden(false);
		},
		isOpened: !isHidden,
	}));

	if (isHidden) return;

	const onStopPropagation = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	return createPortal(
		<div className={styles.backdrop} onClick={onClose}>
			<div className={styles.body} onClick={onStopPropagation}>
				{children}
			</div>
		</div>,
		document.body,
	);
});

export default memo(Drawer);
