import { CurrencyDecorator } from "../decorator/CurrencyDecorator.js";
import { InventoryDecorator } from "../decorator/InventoryDecorator.js";
import { BaseDrawing } from "../base/BaseDrawing.js";

export class InventoryColumn extends BaseDrawing {
    constructor(ctx, x, y, w, h, color) {
        super();
        this.ctx = ctx;
        this.color = color;
        this.h = h;
        this.x = x;
        this.y = y;
        this.w = w;

        this.titleX = this.x + (this.w / 2) - 135;
        this.titleY = this.y + 55;

        this.coinX = this.x + 10;
        this.copperCoinY = 115;
        this.silverCoinY = this.copperCoinY + 50;
        this.goldCoinY = this.silverCoinY + 50;
        this.tinOreY = this.goldCoinY + 50;
        this.copperOreY = this.tinOreY + 50;
        this.ironOreY = this.copperOreY + 50;
        this.tinIngotsY = this.ironOreY + 50;
        this.copperIngotsY = this.tinIngotsY + 50;
        this.bronzeIngotsY = this.copperIngotsY + 50;
        this.ironIngotsY = this.bronzeIngotsY + 50;
        this.tinWeaponsY = this.ironIngotsY + 50;
        this.tinArmorY = this.tinWeaponsY + 50;
        this.copperWeaponsY = this.tinArmorY + 50;
        this.copperArmorY = this.copperWeaponsY + 50;
        this.bronzeWeaponsY = this.copperArmorY + 50;
        this.bronzeArmorY = this.bronzeWeaponsY + 50;
        this.ironWeaponsY = this.bronzeArmorY + 50;
        this.ironArmorY = this.ironWeaponsY + 50;
    }

    update(tick) {

    }

    draw() {
        var coinW = 365;
        var coinH = 40;

        this.drawCoin(document.getElementById("CopperCoin"), CurrencyDecorator.getCopperCoins(),
            this.coinX, this.copperCoinY, coinW, coinH);
        this.drawCoin(document.getElementById("SilverCoin"), CurrencyDecorator.getSilverCoins(),
            this.coinX, this.silverCoinY, coinW, coinH);
        this.drawCoin(document.getElementById("GoldCoin"), CurrencyDecorator.getGoldCoins(),
            this.coinX, this.goldCoinY, coinW, coinH);

        this.drawOre(InventoryDecorator.getTinOre(), 64, 288, this.coinX, this.tinOreY, coinW, coinH);
        this.drawOre(InventoryDecorator.getCopperOre(), 96, 288, this.coinX, this.copperOreY, coinW, coinH);
        this.drawOre(InventoryDecorator.getIronOre(), 128, 288, this.coinX, this.ironOreY, coinW, coinH);

        this.drawIngot(InventoryDecorator.getTinIngots(), 32, 348, this.coinX, this.tinIngotsY, coinW, coinH);
        this.drawIngot(InventoryDecorator.getCopperIngots(), 96, 348, this.coinX, this.copperIngotsY, coinW, coinH);
        this.drawIngot(InventoryDecorator.getBronzeIngots(), 192, 348, this.coinX, this.bronzeIngotsY, coinW, coinH);
        this.drawIngot(InventoryDecorator.getIronIngots(), 128, 348, this.coinX, this.ironIngotsY, coinW, coinH);

        this.drawWeapon(document.getElementById("Sword"), InventoryDecorator.getTinWeapons(),
            this.coinX, this.tinWeaponsY, coinW, coinH);
        this.drawArmor(document.getElementById("Helm"), InventoryDecorator.getTinArmor(),
            this.coinX, this.tinArmorY, coinW, coinH);

        this.drawWeapon(document.getElementById("Sword"), InventoryDecorator.getCopperWeapons(),
            this.coinX, this.copperWeaponsY, coinW, coinH);
        this.drawArmor(document.getElementById("Helm"), InventoryDecorator.getCopperArmor(),
            this.coinX, this.copperArmorY, coinW, coinH);

        this.drawWeapon(document.getElementById("Sword"), InventoryDecorator.getBronzeWeapons(),
            this.coinX, this.bronzeWeaponsY, coinW, coinH);
        this.drawArmor(document.getElementById("Helm"), InventoryDecorator.getBronzeArmor(),
            this.coinX, this.bronzeArmorY, coinW, coinH);

        this.drawWeapon(document.getElementById("Sword"), InventoryDecorator.getIronWeapons(),
            this.coinX, this.ironWeaponsY, coinW, coinH);
        this.drawArmor(document.getElementById("Helm"), InventoryDecorator.getIronArmor(),
            this.coinX, this.ironArmorY, coinW, coinH);
    }

    drawBackground() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        this.ctx.drawImage(
            document.getElementById("Backpack"),
            0,
            0,
            442,
            626,
            this.x,
            this.y,
            this.w,
            this.h
        );

        this.ctx.font = "32pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Inventory", this.titleX + 50, this.titleY - 20);
    }

    drawCoin(image, amount, x, y, w, h) {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(x, y, w, h);

        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "green";
        this.ctx.rect(x, y, w, h);
        this.ctx.stroke();

        this.ctx.drawImage(
            image,
            0,
            0,
            32,
            32,
            x,
            y - 5,
            48,
            48
        );

        this.ctx.font = "32pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(amount, x + 48, y + 36);
    }

    drawOre(amount, ix, iy, x, y, w, h) {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(x, y, w, h);

        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "green";
        this.ctx.rect(x, y, w, h);
        this.ctx.stroke();

        this.ctx.drawImage(
            document.getElementById("OreSpritesheet"),
            ix,
            iy,
            32,
            32,
            x,
            y,
            48,
            48
        );

        this.ctx.font = "32pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(amount, x + 48, y + 36);
    }

    drawIngot(amount, ix, iy, x, y, w, h) {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(x, y, w, h);

        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "green";
        this.ctx.rect(x, y, w, h);
        this.ctx.stroke();

        this.ctx.drawImage(
            document.getElementById("OreSpritesheet"),
            ix,
            iy,
            32,
            32,
            x,
            y - 10,
            48,
            48
        );

        this.ctx.font = "32pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(amount, x + 48, y + 36);
    }

    drawWeapon(image, amount, x, y, w, h) {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(x, y, w, h);

        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "green";
        this.ctx.rect(x, y, w, h);
        this.ctx.stroke();

        this.ctx.drawImage(
            image,
            0,
            0,
            32,
            32,
            x + 7,
            y + 5,
            32,
            32
        );

        this.ctx.font = "32pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(amount, x + 48, y + 36);
    }

    drawArmor(image, amount, x, y, w, h) {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(x, y, w, h);

        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "green";
        this.ctx.rect(x, y, w, h);
        this.ctx.stroke();

        this.ctx.drawImage(
            image,
            0,
            0,
            32,
            32,
            x + 7,
            y + 5,
            32,
            32
        );

        this.ctx.font = "32pt Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(amount, x + 48, y + 36);
    }
}