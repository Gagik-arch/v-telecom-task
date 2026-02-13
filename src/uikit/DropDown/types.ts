import type { ReactNode } from 'react';

export type DropDownProps = {
	children: ({ onClose }: { onClose: () => void }) => ReactNode;
	label: ReactNode;
	labelClassName?: string;
};
