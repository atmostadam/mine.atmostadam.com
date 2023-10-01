import { BaseClickable } from "./BaseClickable.js";

export class BaseOre extends BaseClickable {
    constructor(ix, iy, x, y,) {
        super();

        this.image = document.getElementById("OreSpritesheet");
        this.ix = ix;
        this.iy = iy;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = y;
        this.sw = 128;
        this.sh = 128;
    }

    update(tick) {

    }

    draw() {
        if (this.hidden) {
            return;
        }
        this.drawImageLoaded(
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


}