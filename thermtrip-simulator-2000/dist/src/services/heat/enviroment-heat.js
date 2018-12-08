"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_utils_1 = __importDefault(require("../../utils/math-utils"));
const rxjs_1 = require("rxjs");
/*
* Simulate enviroment heat changes
*/
class EnviromentHeat {
    constructor() {
        this.enviromentHeatFactor$ = new rxjs_1.Subject();
        setInterval(() => {
            this.enviromentHeatFactor$.next(math_utils_1.default.randomBeetween(0, 10) * 0.1);
        }, 2000);
    }
    onHeatChange() {
        return this.enviromentHeatFactor$;
    }
    ;
}
exports.default = new EnviromentHeat();
//# sourceMappingURL=enviroment-heat.js.map