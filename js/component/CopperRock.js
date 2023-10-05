import { BaseRock } from "../base/BaseRock.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";

export class CopperRock extends BaseRock {
    constructor(x) {
        super(32, 0, x, 400);

        if (!CopperRock.instance) {
            CopperRock.instance = this;
        }

        return CopperRock.instance;
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
        if (InventoryDecorator.getTinWeapons() > this.unhideAtTinWeapons) {
            this.hidden = false;
        }
        return this.hidden;
    }

    static unlock() {
        this.getInstance().show();
    }

    static getInstance() {
        return CopperRock.instance;
    }
}