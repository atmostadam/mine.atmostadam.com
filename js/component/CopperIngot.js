import { BaseIngot } from "../base/BaseIngot.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";

export class CopperIngot extends BaseIngot {
    constructor(ix, iy, x, y) {
        super(ix, iy, x, y);

        if (!CopperIngot.instance) {
            CopperIngot.instance = this;
        }

        return CopperIngot.instance;
    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded();
        /*
        this.ctx.drawImage(
            this.image,
            this.ix,
            this.iy,
            this.w,
            this.h,
            this.x,
            this.y,
            this.sw,
            this.sh
        );
        */
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
        return CopperIngot.instance;
    }
}