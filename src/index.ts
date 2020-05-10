import { CSVReader } from './CSVReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HTMLReport } from './reportTargets/HTMLReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const csvReader = MatchReader.fromCSV('football.csv');

// Static method pulled off Summary
const summary = Summary.winsAnalysisWithHTMLReport('Man United');

// const summary = new Summary(
// 	new WinsAnalysis('Man United'),
// 	// new ConsoleReport();
// 	new HTMLReport()
// );
// summary.buildAndPrint(matchReader.matches);
