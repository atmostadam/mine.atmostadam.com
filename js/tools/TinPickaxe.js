import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { between } from "../main.js";

export class TinPickaxe {
    constructor(ctx, x) {
        if (!TinPickaxe.instance) {
            TinPickaxe.instance = this;
        }

        this.ctx = ctx;
        this.image = document.getElementById("Pickaxe");
        this.ix = 0;
        this.iy = 0;
        this.w = 32;
        this.h = 32;
        this.x = x;
        this.y = 20;
        this.sw = 128;
        this.sh = 128;

        this.payoutTicks = 120;
        this.tick = 0;

        this.speed = 6;

        this.minX = this.x - 5;
        this.minY = this.y - 5;
        this.maxX = this.x + 150;
        this.maxY = this.y + 150;

        this.goingUp = true;
        this.hidden = true;

        return TinPickaxe.instance;
    }

    update() {
        if (this.hidden) {
            return;
        }
        if (this.goingUp) {
            this.x += this.speed;
            this.y += this.speed;
        } else {
            this.x -= this.speed;
            this.y -= this.speed;
        }
        if (this.x < this.minX ||
            this.x > this.maxX ||
            this.y < this.minY ||
            this.y > this.maxY) {
            this.goingUp = !this.goingUp;
        }
        if (this.tick > this.payoutTicks) {
            this.hidden = true;
            this.tick = 0;
        }
        this.tick++;
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

    onClick(x, y) {
        if (between(x, 1350, 1475) && between(y, 200, 330)) {
            this.hidden = false;
        }
    }

    payout() {
        return 1;
    }

    static getInstance() {
        return TinPickaxe.instance;
    }
}