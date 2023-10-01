import { BaseOre } from "../base/BaseOre.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";

export class CopperOre extends BaseOre {
    constructor(ix, iy, x, y) {
        super(ix, iy, x, y);

        if (!CopperOre.instance) {
            CopperOre.instance = this;
        }

        return CopperOre.instance;
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