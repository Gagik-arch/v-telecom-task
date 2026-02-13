import * as Icons from 'feather-icons-react';
import { memo } from 'react';
import type { IconProps } from './types';

function Icon({ name, size = 20, ...props }: IconProps) {
	const I = Icons[name];

	return <I icon={name} size={size} {...props} />;
}

export default memo(Icon);
