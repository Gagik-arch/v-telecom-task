import avatar from '$assets/images/avatar.jpg';
import logo from '$assets/images/logo.png';
import Maximizer from '$components/Maximizer';
import SettingsDrawer from '$drawers/SettingsDrawer';
import { FLAG_IMAGE_URL } from '$resources/constants';
import Button from '$uikit/Button';
import DropDown from '$uikit/DropDown';
import Icon from '$uikit/Icon';
import Image from '$uikit/Image';
import Input from '$uikit/Input';
import styles from './header.module.css';

const Header = () => {
	return (
		<div className={styles.root}>
			<div className={styles.top}>
				<a href='/' className={styles.logo_container}>
					<Image src={logo} height={19} />
				</a>

				<div className={styles.actions}>
					<div className={styles.input}>
						<Input
							placeholder='Search...'
							endContent={<Icon name='Search' size={18} color='#fff' />}
						/>
					</div>

					<DropDown
						labelClassName={styles.dropdown_label}
						label={
							<>
								<Image
									src={`${FLAG_IMAGE_URL}/w20/us.png`}
									alt={'flag'}
									className={styles.flag}
									style={{ marginRight: 10 }}
								/>
								English
								<Icon name='ChevronDown' color='var(--foreground)' size={14} />
							</>
						}
					>
						{({ onClose }) => {
							return (
								<>
									<Button className={styles.lang} onClick={onClose}>
										<Image
											src={`${FLAG_IMAGE_URL}/w20/us.png`}
											alt={'flag'}
											className={styles.flag}
										/>
										Spanish
									</Button>
									<Button className={styles.lang} onClick={onClose}>
										<Image
											src={`${FLAG_IMAGE_URL}/w20/es.png`}
											alt={'flag'}
											className={styles.flag}
										/>
										English
									</Button>
									<Button className={styles.lang} onClick={onClose}>
										<Image
											src={`${FLAG_IMAGE_URL}/w20/it.png`}
											alt={'flag'}
											className={styles.flag}
										/>
										Italian
									</Button>
									<Button className={styles.lang} onClick={onClose}>
										<Image
											src={`${FLAG_IMAGE_URL}/w20/ru.png`}
											alt={'flag'}
											className={styles.flag}
										/>
										Russian
									</Button>
								</>
							);
						}}
					</DropDown>

					<Maximizer />

					<DropDown
						labelClassName={styles.dropdown_label}
						label={<Icon name='Bell' />}
					>
						{() => {
							return (
								<div className={styles.notification_container}>
									<div className={styles.notification_container_title}>
										Notifications (0)
									</div>
								</div>
							);
						}}
					</DropDown>

					<Button variant='primary'>
						<Image
							src={avatar}
							alt={'avatar'}
							width={36}
							height={36}
							className={styles.avatar}
						/>
					</Button>

					<SettingsDrawer />
				</div>
			</div>
			<div className={styles.navbar}>navbar</div>
		</div>
	);
};

export default Header;
