import { useRef } from 'react';
import avatar from '$assets/images/avatar.jpg';
import darkLogo from '$assets/images/logo-dark.png';
import lightLogo from '$assets/images/logo-light.png';
import mobileLogo from '$assets/images/mobile-logo.png';
import Maximizer from '$components/Maximizer';
import SettingsDrawer from '$drawers/SettingsDrawer';
import useTheme from '$providers/ThemProvider/hook';
import { FLAG_IMAGE_URL } from '$resources/constants';
import Button from '$uikit/Button';
import DropDown from '$uikit/DropDown';
import Icon from '$uikit/Icon';
import Image from '$uikit/Image';
import Input from '$uikit/Input';
import styles from './header.module.css';
import Navbar from './Navbar';

const Header = () => {
	const navbarRef = useRef<HTMLDivElement>(null);
	const [theme] = useTheme();

	const onClickMenu = () => {
		if (!navbarRef.current) return;

		navbarRef.current.classList.toggle(styles.is_open);
	};

	return (
		<div className={styles.root}>
			<div className={styles.top}>
				<div className={styles.start_content}>
					<a href='/' className={styles.logo_container}>
						<picture>
							<source media='(max-width: 998px)' srcSet={mobileLogo} />
							{theme === 'dark' ? (
								<Image src={darkLogo} height={19} />
							) : (
								<Image src={lightLogo} height={19} />
							)}
						</picture>
					</a>

					<Button className={styles.menu_button} onClick={onClickMenu}>
						<Icon name='Menu' size={24} />
					</Button>
				</div>

				<div className={styles.end_content}>
					<DropDown
						containerClassName={styles.mobile_search_container}
						labelClassName={styles.dropdown_label}
						label={<Icon name='Search' color='var(--foreground)' size={20} />}
					>
						{() => {
							return (
								<div className={styles.mobile_search}>
									<Input
										variant='bordered'
										placeholder='Search...'
										endContent={
											<Icon
												name='Search'
												size={18}
												color='rgba(222, 226, 230, 0.4)'
											/>
										}
									/>
								</div>
							);
						}}
					</DropDown>
					<div className={styles.search_container}>
						<Input
							className={styles.search}
							placeholder='Search...'
							endContent={
								<Icon
									name='Search'
									size={18}
									color='rgba(222, 226, 230, 0.4)'
								/>
							}
						/>
					</div>

					<DropDown
						containerClassName={styles.language_dropdown}
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

					<Button>
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
			<div className={styles.navbar}>
				<div className={styles.navbar_top}>
					<div>
						<div className={styles.title}>Dashboard</div>
						<div className={styles.breadcrumbs}>
							lexa
							<Icon name='ChevronRight' size={14} />
							Dashboard
						</div>
					</div>
					<div>
						<div>
							<svg
								viewBox='0 0 240 60'
								preserveAspectRatio='none'
								width='101'
								height='32'
							>
								<title>Description of the image</title>
								<g transform='scale(1,-1)'>
									<rect
										x='-3.75'
										y='-60'
										width='8.5'
										height='27'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='15.75'
										y='-60'
										width='8.5'
										height='15'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='35.25'
										y='-60'
										width='8.5'
										height='3'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='54.75'
										y='-60'
										width='8.5'
										height='21'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='74.25'
										y='-60'
										width='8.5'
										height='39'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='93.75'
										y='-60'
										width='8.5'
										height='51'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='113.25'
										y='-60'
										width='8.5'
										height='21'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='132.75'
										y='-60'
										width='8.5'
										height='3'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='152.25'
										y='-60'
										width='8.5'
										height='33'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='171.75'
										y='-60'
										width='8.5'
										height='51'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='191.25'
										y='-60'
										width='8.5'
										height='57'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='210.75'
										y='-60'
										width='8.5'
										height='45'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
									<rect
										x='230.25'
										y='-60'
										width='8.5'
										height='51'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(41, 187, 227)',
											fill: 'rgb(41, 187, 227)',
										}}
									/>
								</g>
							</svg>

							<div style={{ fontSize: 12, textAlign: 'center' }}>
								Item Sold 1230
							</div>
						</div>
						<div>
							<svg
								viewBox='0 0 240 60'
								preserveAspectRatio='none'
								width='101'
								height='32'
							>
								<title>Description of the image</title>
								<g transform='scale(1,-1)'>
									<rect
										x='-3.75'
										y='-60'
										width='8.5'
										height='27'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='15.75'
										y='-60'
										width='8.5'
										height='15'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='35.25'
										y='-60'
										width='8.5'
										height='3'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='54.75'
										y='-60'
										width='8.5'
										height='21'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='74.25'
										y='-60'
										width='8.5'
										height='39'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='93.75'
										y='-60'
										width='8.5'
										height='51'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='113.25'
										y='-60'
										width='8.5'
										height='21'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='132.75'
										y='-60'
										width='8.5'
										height='3'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='152.25'
										y='-60'
										width='8.5'
										height='33'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='171.75'
										y='-60'
										width='8.5'
										height='51'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='191.25'
										y='-60'
										width='8.5'
										height='57'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='210.75'
										y='-60'
										width='8.5'
										height='45'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
									<rect
										x='230.25'
										y='-60'
										width='8.5'
										height='51'
										style={{
											strokeWidth: 5,
											stroke: 'rgb(122, 111, 190)',
											fill: 'rgb(122, 111, 190)',
										}}
									/>
								</g>
							</svg>
							<div style={{ fontSize: 12, textAlign: 'center' }}>
								Balance $ 2,317
							</div>
						</div>
					</div>
				</div>
				<Navbar ref={navbarRef} />
			</div>
		</div>
	);
};

export default Header;
