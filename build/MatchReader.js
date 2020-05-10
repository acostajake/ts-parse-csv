"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var CSVReader_1 = require("./CSVReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.fromCSV = function (filename) {
        return new MatchReader(new CSVReader_1.CSVReader(filename));
    };
    // get any file passed, then format data based on tuple
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // typescript expects any kind of string currently, enforcing enum restricts values
                row[5],
                row[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
