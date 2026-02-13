import { useRef } from 'react';
import Button from '$uikit/Button';
import Drawer from '$uikit/Drawer';
import type { DrawerRefType } from '$uikit/Drawer/types';
import Icon from '$uikit/Icon';
import styles from './settingsDrawer.module.css';

const SettingsDrawer = () => {
	const drawerRef = useRef<DrawerRefType>(null);

	return (
		<>
			<Button
				variant='primary'
				onClick={() => {
					drawerRef.current?.open();
				}}
			>
				<Icon name='Settings' className={styles.settings_icon} />
			</Button>

			<Drawer ref={drawerRef}>
				<div>asdasdasd</div>
				<div>asdasdasd</div>
				<div>asdasdasd</div>
				<div>asdasdasd</div>
				<div>asdasdasd</div>
				<div>asdasdasd</div>
				<div>asdasdasd</div>
				<div>asdasdasd</div>
			</Drawer>
		</>
	);
};

export default SettingsDrawer;
