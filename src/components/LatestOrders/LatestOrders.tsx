import avatar from '$assets/images/avatar.jpg';
import Badge from '$uikit/Badge';
import type { Variant } from '$uikit/Badge/types';
import Block from '$uikit/Block';
import Button from '$uikit/Button';
import Image from '$uikit/Image';
import Table from '$uikit/Table';
import styles from './latestOrders.module.css';
import { data } from './static-data';

const STATUS_COLORS: Record<(typeof data)[number]['status'], Variant> = {
	Cancel: 'danger',
	Delivered: 'success',
	Shipped: 'warning',
};

const LatestOrders = () => {
	return (
		<Block className={styles.root}>
			<div className={styles.title}>Latest Orders</div>

			<Table
				wrapperClassName={styles.wrapper}
				body={data.map((tr) => {
					return {
						data: [
							{ tdContent: tr.id },
							{
								tdContent: (
									<div className={styles.avatar_container}>
										<Image src={avatar} className={styles.avatar} />
										{tr.fullName}
									</div>
								),
							},
							{
								tdContent: (
									<>
										<Badge rounded={10} variant={STATUS_COLORS[tr.status]}>
											<span style={{ padding: '2px 6px' }}>{tr.status}</span>
										</Badge>
									</>
								),
							},
							{ tdContent: tr.amount },
							{ tdContent: new Date().toLocaleDateString() },
							{
								tdContent: (
									<>
										<Button variant='default' className={styles.edit_button}>
											Edit
										</Button>
									</>
								),
							},
						],
						id: tr.id,
					};
				})}
			/>
		</Block>
	);
};

export default LatestOrders;
