import { Drawing } from "https://atmostadam.github.io/game-library/base/Drawing.js";

export class Footer extends Drawing {
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
        this.drawFilledRectangleLoaded();
    }
}