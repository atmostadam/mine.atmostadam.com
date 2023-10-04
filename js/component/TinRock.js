import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { between } from "https://atmostadam.github.io/game-library/util/MathUtils.js";
import { BaseRock } from "../base/BaseRock.js";

export class TinRock extends BaseRock {
    constructor(x) {
        super();

        this.ix = 128;
        this.iy = 0;
        this.x = x;
        this.y = 200;

        this.mining = false;
        this.miningBacklog = 0;

        this.pay = "1";
        this.payTicks = 90;
        this.payAtTick = 0
        /*
this.pay = "1";
this.payTicks = 90;

this.payout = "1";

this.payoutTicks = 90;
this.payoutTextTicks = 20;

this.ticking = false;
this.finalTick = 0;

this.textTicking = false;
this.finalTextTick = 0;
*/



        this.textY = this.y + 10;

        this.clickPower = 0;
        this.clickMultiplier = 0;

        this.tinOreToUnlock = 1;

        this.hidden = false;
    }

    update(tick) {
        this.tick = tick;

        if (this.mining && this.tick > this.payAtTick) {
            const finalPayout = Math.ceil(this.pay * this.clickMultiplier);
            InventoryDecorator.addTinOre(finalPayout);
            this.miningBacklog += finalPayout;
            this.mining = false;
        }

        if (this.miningBacklog > 0) {
            this.getCtxDecorator().drawText("+1 Tin Ore", "14pt Arial", "green", this.x + 50, this.textY);
            this.miningBacklog--;
        }

        /*
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



                this.getCtxDecorator().drawText("+" + this.finalPayout + " Tin Ore", "14pt Arial", "green", this.x + 50, this.textY);
                this.textY--;
            }
        }
*/
        if (this.clickPower > 0 && this.tick % 8 === 0) {
            this.clickPower--;
        }
    }

    draw() {
        this.getCtxDecorator().drawFilledRectangle("white", 1350, 203, 130, 130);

        this.drawImageLoaded();

        if (this.mining) {
            var color = "black";
        } else {
            var color = "green";
        }
        this.getCtxDecorator().drawRectangle(5, color, 1350, 203, 130, 130);
    }

    onClick(x, y) {
        if (between(x, 1350, 1475) && between(y, 200, 330)) {
            if (!this.mining) {
                this.mining = true;
                this.payAtTick = this.tick + this.payTicks;
            }

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
}