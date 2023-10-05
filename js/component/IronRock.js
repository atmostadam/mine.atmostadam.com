import { BaseRock } from "../base/BaseRock.js";
import { CurrencyDecorator } from "../decorator/CurrencyDecorator.js";

export class IronRock extends BaseRock {
    constructor(x) {
        super(96, 0, x, 800);

        if (!IronRock.instance) {
            IronRock.instance = this;
        }

        return IronRock.instance;
    }

    update(tick) {

    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded();
    }

    stillLocked() {
        if (CurrencyDecorator.getGoldCoins() > this.unhideAtGold) {
            this.hidden = false;
        }
        return this.hidden;
    }

    static unlock() {
        this.getInstance().show();
    }

    static getInstance() {
        return IronRock.instance;
    }
}