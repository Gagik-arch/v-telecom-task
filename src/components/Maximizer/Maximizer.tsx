import { useState } from 'react';
import Button from '$uikit/Button';
import Icon from '$uikit/Icon';

const Maximizer = () => {
	const [isMaximized, setIsMaximized] = useState(false);

	const onMaximize = () => {
		if (!document.fullscreenElement) {
			// If the document is not in full screen mode
			// make the body full screen
			document.documentElement.requestFullscreen();
			setIsMaximized(true);
		} else {
			// Otherwise exit the full screen
			document.exitFullscreen();
			setIsMaximized(false);
		}
	};

	return (
		<Button variant='primary' onClick={onMaximize}>
			<Icon name={isMaximized ? 'Minimize' : 'Maximize'} />
		</Button>
	);
};
export default Maximizer;
