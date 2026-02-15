import { Chart as CartPackage, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { useEffect, useRef } from 'react';
import Block from '$uikit/Block';
import styles from './chart.module.css';
import { data } from './static-data';

CartPackage.register(...registerables, annotationPlugin);

const Chart = () => {
	const root = useRef<HTMLDivElement>(null);
	const canvas = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const ctx = canvas.current?.getContext('2d');

		if (!canvas.current) return;
		canvas.current.width = 300;
		canvas.current.height = 300;

		if (!ctx) return;

		const chart = new CartPackage(ctx, {
			type: 'doughnut',
			data,
			options: {
				cutout: '75%',
				radius: 120,

				plugins: {
					legend: {
						labels: {
							boxWidth: 10,
							boxHeight: 10,
						},
						position: 'bottom',
						onHover: (e) => {
							const target = e.native?.target as HTMLElement | null;
							if (!target) return;

							target.style.cursor = 'pointer';
						},
						onLeave: (e) => {
							const target = e.native?.target as HTMLElement | null;
							if (!target) return;

							target.style.cursor = 'default';
						},
					},
					annotation: {
						annotations: {
							dLabel: {
								type: 'doughnutLabel',
								content: () => ['In-Store Sales 30'],
								font: [{ size: 16, weight: 600 }],
								color: ['#ADB5BD'],
							},
						},
					},
				},
			},
		});

		return () => {
			chart.destroy();
		};
	}, []);

	return (
		<Block className={styles.root}>
			<div>
				<div className={styles.title}>Monthly Earnings</div>
				<div className={styles.info}>
					<div>
						<div className={styles.amount}>$56241</div>
						<div>Marketplace</div>
					</div>
					<div>
						<div className={styles.amount}>$23651</div>
						<div>Total Income</div>
					</div>
				</div>
			</div>
			<div className={styles.wrapper} ref={root}>
				<canvas ref={canvas} />
			</div>
		</Block>
	);
};

export default Chart;
