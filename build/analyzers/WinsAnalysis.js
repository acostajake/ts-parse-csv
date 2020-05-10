"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
// Becaus it implements Analyzer it must have the method specified on Analyzer, but can include other custom methods
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var teamWins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
                teamWins++;
            }
            else if (match[2] === 'Man United' &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                teamWins++;
            }
        }
        return "Team " + this.team + " won " + teamWins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
