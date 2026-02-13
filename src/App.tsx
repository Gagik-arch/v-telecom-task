import Header from './components/Header';
import useTheme from './themes/useTheme';

function App() {
	useTheme();

	return (
		<>
			<Header />
			<div>body</div>
		</>
	);
}

export default App;
