import { BaseDrawing } from "../base/BaseDrawing.js";

export class Footer extends BaseDrawing {
    constructor(ctx, w, h, x, y) {
        super();
        this.ctx = ctx;
        this.color = "#add8e6";
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
    }

    update(tick) {

    }


    draw() {
        this.fillBackground(this.color, this.x, this.y, this.w, this.h);

    }
}