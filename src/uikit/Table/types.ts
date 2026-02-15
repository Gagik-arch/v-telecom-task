import type { ReactNode } from 'react';

interface TableDataType {
	data: {
		tdContent: ReactNode;
		tooltip?: string;
	}[];
	id: number | string;
	onPressTr?: (id: TableDataType['id'], index: number) => void;
}

export interface TableProps {
	body: TableDataType[];
	header?: ReactNode[];
	wrapperClassName?: string;
	headerClassName?: string;
	bodyClassName?: string;
	isScrollable?: boolean;
}
