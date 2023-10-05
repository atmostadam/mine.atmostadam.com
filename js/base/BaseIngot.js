import { Drawing } from "https://atmostadam.github.io/game-library/base/Drawing.js";

export class BaseIngot extends Drawing {
    constructor(ix, iy, x, y
        /*
        ix,
        iy,
        x,
        y,
        minClickX,
        maxClickX,
        minClickY,
        maxClickY,
        finalTick,
        payoutTicks,
        tick,
        ticking,
        clickPower,
        clickMultiplier
        */
    ) {
        super(ix, iy, x, y
            /*
            minClickX,
            maxClickX,
            minClickY,
            maxClickY,
            finalTick,
            payoutTicks,
            tick,
            ticking,
            clickPower,
            clickMultiplier
            */
        );

        this.image = document.getElementById("OreSpritesheet");
        this.ix = ix;
        this.iy = iy;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = y;
        this.sw = 140;
        this.sh = 140;
    }

    /*
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
    */
}