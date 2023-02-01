"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableService = void 0;
var common_1 = require("@nestjs/common");
var TableService = /** @class */ (function () {
    function TableService() {
        this.tables = [];
    }
    TableService.prototype.findAll = function () {
        return this.tables;
    };
    TableService.prototype.create = function (createTableDto) {
        var table = __assign({ id: "random_id" }, createTableDto);
        this.tables.push(table);
        return table;
    };
    TableService = __decorate([
        (0, common_1.Injectable)()
    ], TableService);
    return TableService;
}());
exports.TableService = TableService;
