import MathUtils from "../../utils/math-utils";
import { Subject } from "rxjs";

/*
* Simulate enviroment heat changes
*/
class EnviromentHeat {
    private enviromentHeatFactor$: Subject<number> = new Subject();

    constructor() {
        setInterval(() => {
            this.enviromentHeatFactor$.next(MathUtils.randomBeetween(0, 10) * 0.1)
        }, 2000);
    }

    public onHeatChange(): Subject<number> {
        return this.enviromentHeatFactor$;
    };
}

export default new EnviromentHeat();