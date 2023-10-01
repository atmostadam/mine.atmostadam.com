import { BaseClickable } from "./BaseClickable.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";

export class BaseRock extends BaseClickable {
    constructor() {
        super();

        this.image = document.getElementById("OreSpritesheet");
        this.w = 32;
        this.h = 32;
        this.sw = 128;
        this.sh = 128;
    }

    update(tick) {
        this.stillLocked();
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

    stillLocked() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override stillLocked()");
    }
}