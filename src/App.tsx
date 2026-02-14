import Body from '$components/Body';
import Header from '$components/Header';
import useTheme from './themes/useTheme';

function App() {
	useTheme();

	return (
		<>
			<Header />
			<Body />
		</>
	);
}

export default App;
