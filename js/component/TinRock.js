import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { between } from "../main.js";
import { BaseRock } from "../base/BaseRock.js";

export class TinRock extends BaseRock {
    constructor(x) {
        super();

        if (!TinRock.instance) {
            TinRock.instance = this;
        }

        this.ix = 128;
        this.iy = 0;
        this.x = x;
        this.y = 200;

        this.payout = "1";

        this.payoutTicks = 90;
        this.payoutTextTicks = 20;

        this.ticking = false;
        this.finalTick = 0;

        this.textTicking = false;
        this.finalTextTick = 0;

        this.textY = this.y + 10;

        this.clickPower = 0;
        this.clickMultiplier = 0;

        this.tinOreToUnlock = 1;

        return TinRock.instance;
    }

    update(tick) {
        this.tick = tick;
        if (this.ticking && this.tick > this.finalTick) {
            this.finalPayout = Math.ceil(this.payout * this.clickMultiplier);
            InventoryDecorator.addTinOre(this.finalPayout);
            this.ticking = false;
            this.finalTick = 0;
            this.textTicking = true;
            this.finalTextTick = this.tick + this.payoutTextTicks;
        }

        if (this.textTicking) {
            if (this.tick > this.finalTextTick) {
                this.textTicking = false;
                this.finalTextTick = 0;
                this.textY = this.y + 10;
            } else {
                this.ctx.font = "14pt Arial";
                this.ctx.fillStyle = "green";
                this.ctx.fillText("+" + this.finalPayout + " Tin Ore", this.x + 50, this.textY);
                this.textY--;
            }
        }

        if (this.clickPower > 0 && this.tick % 8 === 0) {
            this.clickPower--;
        }
    }

    draw() {
        this.fillBackground("white", 1350, 203, 130, 130);
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
        if (this.ticking) {
            var color = "black";
        } else {
            var color = "green";
        }
        this.drawRectangle(5, color, 1350, 203, 130, 130);
    }

    onClick(x, y) {
        if (between(x, 1350, 1475) && between(y, 200, 330)) {
            if (this.finalTick === 0) {
                this.finalTick = this.tick + this.payoutTicks;
            }
            this.ticking = true;

            if (this.clickPower < 50) {
                this.clickPower++;
                this.clickMultiplier = 1 + (this.clickPower * .1);
            }
        }
    }

    static canUnlock(tinOre) {
        if (this.instance.tinOreToUnlock < tinOre) {
            return true;
        }
        return false;
    }

    static unlock() {
        this.instance.hidden = false;
    }

    static getInstance() {
        return this.instance;
    }
}