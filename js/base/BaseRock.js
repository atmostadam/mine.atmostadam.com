import { BaseHiddenDrawing } from "./BaseHiddenDrawing.js";

export class BaseRock extends BaseHiddenDrawing {
    constructor() {
        super();

        this.image = document.getElementById("OreSpritesheet");
        this.w = 32;
        this.h = 32;
        this.sw = 128;
        this.sh = 128;
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
}