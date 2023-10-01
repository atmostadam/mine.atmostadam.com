import { BaseIngot } from "../base/BaseIngot.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";

export class TinIngot extends BaseIngot {
    constructor(ix, iy, x, y) {
        super(ix, iy, x, y);

        if (!TinIngot.instance) {
            TinIngot.instance = this;
        }

        return TinIngot.instance;
    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded();
    }

    /*
    stillLocked() {
        if (InventoryDecorator.getTinWeapons() > this.unhideAtTinWeapons) {
            this.hidden = false;
        }
        return this.hidden;
    }
    */

    static unlock() {
        this.instance.hidden = false;
    }

    static getInstance() {
        return this.instance;
    }
}