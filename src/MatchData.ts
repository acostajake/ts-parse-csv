import { MatchResult } from './MatchResult';

// tuple to describe csv row split into column names
export type MatchData = [
	Date,
	string,
	string,
	number,
	number,
	MatchResult,
	string
];
