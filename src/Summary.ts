import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HTMLReport } from './reportTargets/HTMLReport';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

//  When defining an instance w composition, pass an instance of interfaces above
export class Summary {
	static winsAnalysisWithHTMLReport(team: string) {
		return new Summary(new WinsAnalysis(team), new HTMLReport());
	}

	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

	buildAndPrint(matches: MatchData[]): void {
		const report = this.analyzer.run(matches);
		this.outputTarget.print(report);
	}
}
