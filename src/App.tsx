import Cards from '$components/Cards';
import Chart from '$components/Chart';
import Header from '$components/Header';
import LatestOrders from '$components/LatestOrders';
import styles from './app.module.css';

function App() {
	return (
		<>
			<Header />
			<div className={styles.content}>
				<Cards />
				<div className={styles.row}>
					<Chart />
					<LatestOrders />
				</div>
			</div>
		</>
	);
}

export default App;
