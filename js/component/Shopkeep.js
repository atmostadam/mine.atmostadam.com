import { BaseHiddenDrawing } from "../base/BaseHiddenDrawing.js";

export class Shopkeep extends BaseHiddenDrawing {
    constructor(x, y) {
        super();

        if (!Shopkeep.instance) {
            Shopkeep.instance = this;
        }

        this.image = document.getElementById("BlueFlameShopkeep");
        this.ix = 0;
        this.iy = 0;
        this.w = 64;
        this.h = 64;
        this.x = x;
        this.y = y;
        this.sw = 192;
        this.sh = 192;

        this.hidden = true;

        return Shopkeep.instance;
    }

    update(tick) {

    }

    draw() {
        if (this.hidden) {
            return;
        }
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
    }

    static unlock() {
        this.getInstance().show();
    }

    static getInstance() {
        return Shopkeep.instance;
    }
}