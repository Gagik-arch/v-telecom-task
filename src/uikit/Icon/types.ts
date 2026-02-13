import type * as Feather from 'feather-icons-react';

export type IconProps = Omit<Feather.FeatherIconProps, 'icon'> & {
	name: keyof typeof Feather;
	size?: number;
};
