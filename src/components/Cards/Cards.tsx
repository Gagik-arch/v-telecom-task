import Badge from '$uikit/Badge';
import Icon from '$uikit/Icon';
import type { IconProps } from '$uikit/Icon/types';
import styles from './cards.module.css';
import { staticData } from './static-data';
import { parseAmountToStatus } from './utils';

const Cards = () => {
	return (
		<div className={styles.root}>
			{staticData.map((item) => {
				return (
					<div key={item.title} className={styles.card}>
						<div>
							<div className={styles.title}> {item.title}</div>
							<div className={styles.amount}> {item.amount}</div>
							<div className={styles.status}>
								<Badge variant={parseAmountToStatus(item.progress)}>
									{new Intl.NumberFormat('en-US', {
										style: 'decimal',
										signDisplay: 'exceptZero',
									}).format(item.progress)}
									%
								</Badge>
								From previous period
							</div>
						</div>
						<span className={styles.circle}>
							<Icon
								name={item.icon as IconProps['name']}
								color='#fff'
								size={26}
							/>
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
