import { BaseHiddenDrawing } from "../base/BaseHiddenDrawing.js";

export class Counter extends BaseHiddenDrawing {
    constructor(ix, iy, x, y) {
        super();

        if (!Counter.instance) {
            Counter.instance = this;
        }

        this.image = document.getElementById("InteriorTileset");
        this.ix = ix;
        this.iy = iy;
        this.w = 48;
        this.h = 48;
        this.x = x;
        this.y = y;
        this.sw = 96;
        this.sh = 96;

        this.hidden = true;

        return Counter.instance;
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
        return Counter.instance;
    }
}