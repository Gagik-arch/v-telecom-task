import { useRef } from 'react';
import { useTheme } from '$providers/ThemProvider';
import Button from '$uikit/Button';
import Drawer from '$uikit/Drawer';
import type { DrawerRefType } from '$uikit/Drawer/types';
import Icon from '$uikit/Icon';
import styles from './settingsDrawer.module.css';

const SettingsDrawer = () => {
	const [theme, setTheme] = useTheme();

	const drawerRef = useRef<DrawerRefType>(null);

	const onChangeTheme = (mode: 'light' | 'dark') => {
		setTheme(mode);
	};

	return (
		<>
			<Button
				onClick={() => {
					drawerRef.current?.open();
				}}
			>
				<Icon name='Settings' className={styles.settings_icon} />
			</Button>

			<Drawer ref={drawerRef}>
				<div className={styles.root}>
					<div className={styles.header}>
						Settings
						<Button
							onClick={() => {
								drawerRef.current?.close();
							}}
						>
							<Icon name='X' />
						</Button>
					</div>
					<div className={styles.body}>
						<div>Mode</div>
						<div className={styles.btn_container}>
							<Button
								variant={theme === 'light' ? 'primary' : 'secondary'}
								onClick={() => onChangeTheme('light')}
							>
								Light
							</Button>
							<Button
								variant={theme === 'dark' ? 'primary' : 'secondary'}
								onClick={() => onChangeTheme('dark')}
							>
								Dark
							</Button>
						</div>
					</div>
				</div>
			</Drawer>
		</>
	);
};

export default SettingsDrawer;
