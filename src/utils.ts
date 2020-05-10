export const dateStringToDate = (dateString: string): Date => {
	const dateArray = dateString
		.split('/')
		.reverse()
		.map((value: string): number => {
			return parseInt(value);
		});

	return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
};
