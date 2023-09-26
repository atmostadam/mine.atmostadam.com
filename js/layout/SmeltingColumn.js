import { Ingot } from "../model/Ingot.js"
import { Furnance } from "../model/Furnance.js"

export class SmeltingColumn {
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

        const furnanceX = this.x + halfWidth - 100;
        const furnanceTopY = this.y + 60;
        const furnanceBottomY = this.y + 440;

        const tinIX = 32;
        const tinIY = 348;
        const tinX = this.x + halfWidth - 150;
        const tinY = this.y + 320;

        const copperIX = 96;
        const copperIY = 348;
        const copperX = this.x + halfWidth + 20;
        const copperY = this.y + 320;

        const bronzeIX = 192;
        const bronzeIY = 348;
        const bronzeX = this.x + halfWidth - 150;
        const bronzeY = this.y + 700;

        const ironIX = 128;
        const ironIY = 348;
        const ironX = this.x + halfWidth + 20;
        const ironY = this.y + 700;

        this.furnanceTop = new Furnance(ctx, furnanceX, furnanceTopY);
        this.furnanceBottom = new Furnance(ctx, furnanceX, furnanceBottomY);

        this.tin = new Ingot(ctx, tinIX, tinIY, tinX, tinY);
        this.copper = new Ingot(ctx, copperIX, copperIY, copperX, copperY);
        this.bronze = new Ingot(ctx, bronzeIX, bronzeIY, bronzeX, bronzeY);
        this.iron = new Ingot(ctx, ironIX, ironIY, ironX, ironY);
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        this.ctx.font = "50pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Smelting", this.titleX, this.titleY);

        this.furnanceTop.draw();
        this.furnanceBottom.draw();

        this.copper.draw();
        this.tin.draw();
        this.bronze.draw();
        this.iron.draw();

    }

    /*
    drawTopFurnance() {
        this.ctx.drawImage(
            document.getElementById("OreSpritesheet"),
            0,
            420,
            64,
            96,
            this.furnanceX,
            this.furnanceTopY,
            192,
            288
        );
    }

    drawBottomFurnance() {
        this.ctx.drawImage(
            document.getElementById("OreSpritesheet"),
            0,
            420,
            64,
            96,
            this.furnanceX,
            this.furnanceBottomY,
            192,
            288
        );
    }
    */
}