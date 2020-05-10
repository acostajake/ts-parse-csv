import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

// Becaus it implements Analyzer it must have the method specified on Analyzer, but can include other custom methods
export class WinsAnalysis implements Analyzer {
	constructor(public team: string) {}

	run(matches: MatchData[]): string {
		let teamWins = 0;
		for (let match of matches) {
			if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
				teamWins++;
			} else if (
				match[2] === 'Man United' &&
				match[5] === MatchResult.AwayWin
			) {
				teamWins++;
			}
		}
		return `Team ${this.team} won ${teamWins} games`;
	}
}
