import { BaseOre } from "../base/BaseOre.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";

export class IronOre extends BaseOre {
    constructor(ix, iy, x, y) {
        super(ix, iy, x, y);

        if (!IronOre.instance) {
            IronOre.instance = this;
        }

        return IronOre.instance;
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
        return IronOre.instance;
    }
}