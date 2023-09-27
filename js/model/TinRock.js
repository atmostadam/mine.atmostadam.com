import { GameCache } from "../persistence/GameCache.js";

export class TinRock {
    constructor(ctx, x) {
        this.ctx = ctx;
        this.image = document.getElementById("OreSpritesheet");
        this.ix = 128;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = 200;
        this.sw = 128;
        this.sh = 128;

        GameCache.setClass(this);

        this.hidden = false;
    }

    update() {
        if (this.hidden) {
            return;
        }
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

    hide() {
        this.hidden = true;
    }

    show() {
        this.hidden = false;
    }

    onClick() {
        console.log("TinRock clicked");
    }
}