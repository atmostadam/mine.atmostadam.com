import { BaseDrawing } from "../base/BaseDrawing.js";

export class Footer extends BaseDrawing {
    constructor(w, h, x, y) {
        super();

        //this.color = "#add8e6";
        this.color = "black";
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