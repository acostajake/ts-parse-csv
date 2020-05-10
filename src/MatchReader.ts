import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CSVReader } from './CSVReader';

interface DataReader {
	read(): void;
	data: string[][];
}

export class MatchReader {
	static fromCSV(filename: string): MatchReader {
		return new MatchReader(new CSVReader(filename));
	}

	matches: MatchData[] = [];

	constructor(public reader: DataReader) {}

	// get any file passed, then format data based on tuple
	load(): void {
		this.reader.read();
		this.matches = this.reader.data.map(
			(row: string[]): MatchData => {
				return [
					dateStringToDate(row[0]),
					row[1],
					row[2],
					parseInt(row[3]),
					parseInt(row[4]),
					// typescript expects any kind of string currently, enforcing enum restricts values
					row[5] as MatchResult,
					row[6],
				];
			}
		);
	}
}
