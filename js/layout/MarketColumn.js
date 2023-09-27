import { Counter } from "../component/Counter.js"
import { Shopkeep } from "../component/Shopkeep.js"

export class MarketColumn {
    constructor(ctx, x, y, w, h, color) {
        this.ctx = ctx;
        this.color = color;
        this.h = h;
        this.x = x;
        this.y = y;
        this.w = w;

        const halfWidth = this.w / 2;

        this.titleX = this.x + halfWidth - 135;
        this.titleY = this.y + 55;

        const counterIY = 720;
        const counterY = this.y + 170;

        const counterIX = 1200;
        const counterRightX = this.w - 90;
        const counterMiddleRightX = this.w - 144;
        const counterMiddleX = this.w - 216;
        const counterMiddleLeftX = this.w - 288;
        const counterLeftX = this.w - 380;

        this.counterRight = new Counter(ctx, counterIX, counterIY, counterRightX, counterY);
        this.counterMiddleRight = new Counter(ctx, counterIX, counterIY, counterMiddleRightX, counterY);
        this.counterMiddle = new Counter(ctx, counterIX, counterIY, counterMiddleX, counterY);
        this.counterMiddleLeft = new Counter(ctx, counterIX, counterIY, counterMiddleLeftX, counterY);
        this.counterLeft = new Counter(ctx, counterIX + 48, counterIY, counterLeftX, counterY);

        this.shopkeepX = halfWidth - 45;
        this.shopkeepY = this.y + 60;

        this.shopkeep = new Shopkeep(ctx, this.shopkeepX, this.shopkeepY);
    }

    update(tick) {
        this.counterLeft.update(tick);
        this.counterMiddleLeft.update(tick);
        this.counterMiddle.update(tick);
        this.counterMiddleRight.update(tick);
        this.counterRight.update(tick);

        this.shopkeep.update(tick);
    }

    draw() {
        this.counterLeft.draw();
        this.counterMiddleLeft.draw();
        this.counterMiddle.draw();
        this.counterMiddleRight.draw();
        this.counterRight.draw();

        this.shopkeep.draw();
    }

    drawBackground() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        this.ctx.font = "50pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Marketing", this.titleX, this.titleY);
    }
}