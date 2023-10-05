import { BaseHiddenDrawing } from "../base/BaseHiddenDrawing.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { BronzeIngot } from "./BronzeIngot.js";

export class Anvil extends BaseHiddenDrawing {
    constructor(x, y) {
        super();

        if (!Anvil.instance) {
            Anvil.instance = this;
        }

        this.unhideAtTinIngots = 100;

        this.image = document.getElementById("Anvil");
        this.ix = 0;
        this.iy = 0;
        this.w = 64;
        this.h = 64;
        this.x = x;
        this.y = y;
        this.sw = 192;
        this.sh = 192;

        return Anvil.instance;
    }

    update(tick) {

    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImage(
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
    }

    static unlock() {
        this.getInstance().show();
    }

    static getInstance() {
        return BronzeIngot.instance;
    }
}