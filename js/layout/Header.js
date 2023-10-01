import { BaseDrawing } from "../base/BaseDrawing.js";
import { ScrollingTextHandler } from "../handler/ScrollingTextHandler.js";
import { GameCache } from "../persistence/GameCache.js";

export class Header extends BaseDrawing {
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
        this.endX = GameCache.getWidth() - 50;

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
        this.fillBackground(this.color, this.x, this.y, this.w, this.h);
        if (null != this.handler.text) {
            this.drawText(this.handler.text, "46pt Arial", this.handler.textColor, this.tx, this.ty);
            this.tx += 2;
        }
    }
}