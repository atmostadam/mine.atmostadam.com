import { BaseIngot } from "../base/BaseIngot.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";

export class IronIngot extends BaseIngot {
    constructor(ix, iy, x, y) {
        super(ix, iy, x, y);

        if (!IronIngot.instance) {
            IronIngot.instance = this;
        }

        return IronIngot.instance;
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
        return IronIngot.instance;
    }
}