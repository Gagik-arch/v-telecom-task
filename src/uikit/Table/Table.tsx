import { memo } from 'react';
import styles from './table.module.css';
import type { TableProps } from './types';

function Table({
	header,
	body,
	wrapperClassName = '',
	headerClassName = '',
	bodyClassName = '',
	isScrollable = true,
}: TableProps) {
	return (
		<div className={`${styles.root} scrollbar ${wrapperClassName}`}>
			<table
				className={styles.table}
				style={
					isScrollable
						? {
								position: 'absolute',
							}
						: undefined
				}
			>
				<thead className={`${headerClassName}`}>
					<tr>
						{header?.map((h, headerIndex) => {
							return (
								<td key={headerIndex.toString()}>
									<div className='flex items-center'>{h}</div>
								</td>
							);
						})}
					</tr>
				</thead>

				<tbody className={`${bodyClassName}`}>
					{body?.length ? (
						body.map((item, index) => {
							return (
								<tr
									key={item.id}
									onClick={() => {
										item.onPressTr?.(item.id, index);
									}}
								>
									{item.data.map((child, index) => {
										return (
											<td key={index.toString()}>
												{<div title={child.tooltip}>{child.tdContent}</div>}
											</td>
										);
									})}
								</tr>
							);
						})
					) : (
						<tr
							className={`${styles.empty_row}`}
							data-content={'No data available!'}
						/>
					)}
				</tbody>
			</table>
		</div>
	);
}

export default memo(Table);
