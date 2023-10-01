import { Shovel } from "../tools/Shovel.js";
import { Furnance } from "../component/Furnance.js";
import { BaseHiddenDrawing } from "../base/BaseHiddenDrawing.js"
import { TinOre } from "../component/TinOre.js";
import { CopperOre } from "../component/CopperOre.js";
import { IronOre } from "../component/IronOre.js";

export class SmeltingColumn extends BaseHiddenDrawing {
    constructor(x, y, w, h, color) {
        super();

        if (!SmeltingColumn.instance) {
            SmeltingColumn.instance = this;
        }

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

        const tinIX = 64;
        const tinIY = 288;
        const tinX = this.x + halfWidth - 150;
        const tinY = this.y + 350;

        const copperIX = 96;
        const copperIY = 288;
        const copperX = this.x + halfWidth + 20;
        const copperY = this.y + 350;

        const ironIX = 128;
        const ironIY = 288;
        const ironX = this.x + halfWidth + 20;
        const ironY = this.y + 730;

        this.furnanceTop = new Furnance(furnanceX, furnanceTopY);
        this.furnanceBottom = new Furnance(furnanceX, furnanceBottomY);

        this.tin = new TinOre(tinIX, tinIY, tinX, tinY);
        this.copper = new CopperOre(copperIX, copperIY, copperX, copperY);
        this.iron = new IronOre(ironIX, ironIY, ironX, ironY);

        this.tinShovel = new Shovel(tinX - 150, tinY + 150);
        this.copperShovel = new Shovel(copperX - 150, copperY + 150);
        this.ironShovel = new Shovel(ironX - 150, ironY + 150);

        return SmeltingColumn.instance;
    }

    update(tick) {
        if (this.hidden) {
            return;
        }

        this.furnanceTop.update(tick);
        this.furnanceBottom.update(tick);

        this.tin.update(tick);
        this.copper.update(tick);
        this.iron.update(tick);

        this.tinShovel.update(tick);
        this.copperShovel.update(tick);
        this.ironShovel.update(tick);
    }

    draw() {
        if (this.hidden) {
            return;
        }

        this.fillBackground("black", this.x, this.y, this.w, this.h);
        this.drawBackground();

        this.drawText("Smelting", "50pt Arial", "black", this.titleX, this.titleY);

        this.furnanceTop.draw();
        this.furnanceBottom.draw();

        this.tin.draw();
        this.copper.draw();
        this.iron.draw();

        this.tinShovel.draw();
        this.copperShovel.draw();
        this.ironShovel.draw();
    }

    drawBackground() {
        this.drawImage(
            document.getElementById("FlameBackground"),
            0,
            0,
            237,
            454,
            this.x,
            this.y,
            this.w,
            this.h
        );
    }

    static unlock() {
        this.instance.hidden = false;
    }

    static getInstance() {
        return this.instance;
    }
}