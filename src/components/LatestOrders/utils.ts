export const parseAmountToStatus = (amount: number) => {
	if (amount > 0) return 'info';
	else if (amount < 0) return 'danger';

	return 'warning';
};
