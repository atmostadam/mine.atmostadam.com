import { GameCache } from "../persistence/GameCache.js";
import { GameDeveloperException } from "../exception/GameDeveloperException.js";

export class BaseDrawing {
    constructor() {
        this.ctx = GameCache.getCtx();
        this.width = GameCache.getWidth();
        this.height = GameCache.getHeight();
    }

    update(tick) {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override update(tick)");
    }

    draw() {
        throw new GameDeveloperException("This method is ABSTRACT. Subclass MUST override draw()");
    }

    fillBackground(color, x, y, w, h) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
    }

    drawImage(image, ix, iy, w, h, x, y, sw, sh) {
        this.ctx.drawImage(image, ix, iy, w, h, x, y, sw, sh);
    };

    drawImageLoaded() {
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

    drawText(text, tonf, color, x, y) {
        this.ctx.font = tonf;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    }

    drawRectangle(size, color, x, y, w, h) {
        this.ctx.beginPath();
        this.ctx.lineWidth = size;
        this.ctx.strokeStyle = color;
        this.ctx.rect(x, y, w, h);
        this.ctx.stroke();
    }
}