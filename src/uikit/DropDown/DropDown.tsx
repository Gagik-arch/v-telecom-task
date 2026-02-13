import { memo, useEffect, useRef, useState } from 'react';
import Button from '$uikit/Button';
import styles from './dropdown.module.css';
import type { DropDownProps } from './types';

const DropDown = memo(
	({ children, label, labelClassName = '' }: DropDownProps) => {
		const [isHide, setIsHide] = useState(true);
		const ref = useRef<HTMLDivElement>(null);

		useEffect(() => {
			if (!ref.current || isHide) return;

			const rect = ref.current.getBoundingClientRect();

			if (window.innerWidth <= rect.right) {
				ref.current.style.right = '0px';
			}

			if (window.innerHeight <= rect.bottom) {
				ref.current.style.bottom = '0px';
			}
		}, [isHide]);

		return (
			<div className={styles.root}>
				<Button
					className={[styles.button, labelClassName].join(' ')}
					onClick={() => {
						setIsHide(false);
					}}
				>
					{label}
				</Button>

				{!isHide && (
					<>
						<div
							ref={ref}
							className={[
								styles.content,
								isHide ? styles.fade_out_element : styles.fade_in_element,
							].join(' ')}
						>
							{children({ onClose: () => setIsHide(true) })}
						</div>
						<Button
							className={styles.backdrop}
							onClick={() => {
								setIsHide(true);
							}}
						/>
					</>
				)}
			</div>
		);
	},
);

export default DropDown;
