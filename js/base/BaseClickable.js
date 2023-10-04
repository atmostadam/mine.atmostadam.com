import { BaseHiddenDrawing } from "./BaseHiddenDrawing.js";
import { between } from "https://atmostadam.github.io/game-library/util/MathUtils.js";

export class BaseClickable extends BaseHiddenDrawing {
    constructor(
        minClickX,
        maxClickX,
        minClickY,
        maxClickY,
        finalTick,
        payoutTicks,
        tick,
        ticking,
        clickPower,
        clickMultiplier
    ) {
        super();
        this.minClickX = minClickX;
        this.maxClickX = maxClickX;
        this.minClickY = minClickY;
        this.maxClickY = maxClickY;
        this.finalTick = finalTick;
        this.payoutTicks = payoutTicks;
        this.tick = tick;
        this.ticking = ticking;
        this.clickPower = clickPower;
        this.clickMultiplier = clickMultiplier;
    }

    onClick(x, y) {
        console.log("[" + x + ", " + y + "]");
        if (between(x, this.minClickX, this.maxClickX) && between(y, this.minClickY, this.maxClickY)) {
            if (this.finalTick === 0) {
                this.finalTick = this.tick + this.payoutTicks;
            }
            this.ticking = true;

            if (this.clickPower < 50) {
                this.clickPower++;
                this.clickMultiplier = 1 + (this.clickPower * .1);
            }
        }
    }

}