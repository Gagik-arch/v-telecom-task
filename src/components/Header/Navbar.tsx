import { forwardRef } from 'react';
import Button from '$uikit/Button';
import Icon from '$uikit/Icon';
import styles from './header.module.css';

const Navbar = forwardRef<HTMLDivElement | null>((_, ref) => {
	return (
		<div className={[styles.menu].join(' ')} ref={ref}>
			<Button className={styles.button}>
				<Icon name={'Wifi'} size={16} />
				Dashboard
			</Button>

			<Button className={styles.button}>
				<Icon name={'Mail'} size={16} />
				Email
			</Button>

			<Button className={styles.button}>
				<Icon name={'Briefcase'} size={16} />
				UI Elements
			</Button>

			<Button className={styles.button}>
				<Icon name={'File'} size={16} />
				Forms
			</Button>

			<Button className={styles.button}>
				<Icon name={'List'} size={16} />
				More
			</Button>

			<Button className={styles.button}>
				<Icon name={'PieChart'} size={16} />
				Charts
			</Button>

			<Button className={styles.button}>
				<Icon name={'Briefcase'} size={16} />
				Pages
			</Button>
		</div>
	);
});

export default Navbar;
