import { Rock } from "../model/Rock.js"

export class MiningColumn {
    constructor(ctx, x, y, w, h, color) {
        this.ctx = ctx;
        this.color = color;
        this.h = h;
        this.x = x;
        this.y = y;
        this.w = w;

        const halfWidth = this.w / 2;
        const rockX = this.x + halfWidth - 64;

        this.titleX = this.x + halfWidth - 100;
        this.titleY = this.y + 55;

        this.copper = new Rock(ctx, 24, 24, 24, 24, rockX, 250, 128, 128);
        this.bronze = new Rock(ctx, 48, 24, 24, 24, rockX, 400, 128, 128);
        this.iron = new Rock(ctx, 72, 24, 24, 24, rockX, 550, 128, 128);
        this.silver = new Rock(ctx, 96, 24, 24, 24, rockX, 700, 128, 128);
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        this.ctx.font = "50pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Mining", this.titleX, this.titleY);

        this.copper.draw();
        this.bronze.draw();
        this.iron.draw();
        this.silver.draw();
    }
}