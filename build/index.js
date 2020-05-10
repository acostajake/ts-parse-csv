"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var csvReader = MatchReader_1.MatchReader.fromCSV('football.csv');
// Static method pulled off Summary
var summary = Summary_1.Summary.winsAnalysisWithHTMLReport('Man United');
// const summary = new Summary(
// 	new WinsAnalysis('Man United'),
// 	// new ConsoleReport();
// 	new HTMLReport()
// );
// summary.buildAndPrint(matchReader.matches);
