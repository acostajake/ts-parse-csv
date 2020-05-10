"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HTMLReport_1 = require("./reportTargets/HTMLReport");
//  When defining an instance w composition, pass an instance of interfaces above
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisWithHTMLReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HTMLReport_1.HTMLReport());
    };
    Summary.prototype.buildAndPrint = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
