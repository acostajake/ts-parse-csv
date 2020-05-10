import fs from 'fs';

// <T> is a generic type, used to indicate any data type can be passed down
export abstract class CSVReader<T> {
	data: T[] = [];

	constructor(public filename: string) {}
	abstract mapRow(row: string[]): T;

	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8',
			})
			.split('\n')
			.map((row: string): string[] => {
				return row.split(',');
			})
			.map(this.mapRow);
	}
}
