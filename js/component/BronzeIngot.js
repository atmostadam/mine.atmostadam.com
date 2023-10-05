import { BaseIngot } from "../base/BaseIngot.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";

export class BronzeIngot extends BaseIngot {
    constructor(ix, iy, x, y) {
        super(ix, iy, x, y);

        if (!BronzeIngot.instance) {
            BronzeIngot.instance = this;
        }

        return BronzeIngot.instance;
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
        return BronzeIngot.instance;
    }
}