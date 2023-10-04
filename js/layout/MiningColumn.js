import { IronRock } from "../component/IronRock.js";
import { TinRock } from "../component/TinRock.js";
import { CopperRock } from "../component/CopperRock.js";
import { IronPickaxe } from "../tools/IronPickaxe.js";
import { TinPickaxe } from "../tools/TinPickaxe.js";
import { CopperPickaxe } from "../tools/CopperPickaxe.js";
import { Drawing } from "https://atmostadam.github.io/game-library/base/Drawing.js";

export class MiningColumn extends Drawing {
    constructor(x, y, w, h, color) {
        super();

        this.color = color;
        this.h = h;
        this.x = x;
        this.y = y;
        this.w = w;

        const halfWidth = this.w / 2;
        const rockX = this.x + halfWidth + 6;

        this.titleX = this.x + halfWidth - 100;
        this.titleY = this.y + 55;

        this.tinRock = new TinRock(rockX);
        this.copperRock = new CopperRock(rockX);
        this.ironRock = new IronRock(rockX);

        this.tinPickaxe = new TinPickaxe(rockX - 180);
        this.copperPickaxe = new CopperPickaxe(rockX - 180);
        this.ironPickaxe = new IronPickaxe(rockX - 180);
    }

    update(tick) {
        this.tinRock.update(tick);
        this.copperRock.update(tick);
        this.ironRock.update(tick);

        this.tinPickaxe.update(tick);
        this.copperPickaxe.update(tick);
        this.ironPickaxe.update(tick);
    }

    draw() {
        this.getCtxDecorator().drawFilledRectangle(this.color, this.x, this.y, this.w, this.h);

        this.getCtxDecorator().drawImage(
            document.getElementById("MineShaftBackground"),
            0,
            0,
            262,
            375,
            this.x,
            this.y,
            this.w,
            this.h
        );

        this.getCtxDecorator().drawText("Mining", "32pt Arial", "black", this.titleX + 50, this.titleY - 20);

        this.tinRock.draw();
        this.copperRock.draw();
        this.ironRock.draw();

        this.tinPickaxe.draw();
        this.copperPickaxe.draw();
        this.ironPickaxe.draw();
    }

    static unlock() {
        this.getInstance().show();
    }
}