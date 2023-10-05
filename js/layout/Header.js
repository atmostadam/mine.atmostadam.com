import { Drawing } from "https://atmostadam.github.io/game-library/base/Drawing.js";
import { ScrollingTextHandler } from "../handler/ScrollingTextHandler.js";
import { GameContext } from "https://atmostadam.github.io/game-library/context/GameContext.js";
import { drawText } from "https://atmostadam.github.io/game-library/util/DrawingUtils.js";

export class Header extends Drawing {
    constructor(w, h, x, y) {
        super();

        this.color = "#e1e1e1";
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;

        this.startX = 50;
        this.tx = this.startX;
        this.ty = 53;
        this.endX = GameContext.getWidth() - 50;

        this.handler = new ScrollingTextHandler();
    }

    update(tick) {
        this.handler.updateText();
        if (this.tx > this.endX) {
            this.tx = this.startX;
            this.handler.next();
        }
    }

    draw() {
        this.drawFilledRectangleLoaded();
        if (null != this.handler.text) {
            drawText(this.handler.text, "46pt Arial", this.handler.textColor, this.tx, this.ty);
            this.tx += 2;
        }
    }
}