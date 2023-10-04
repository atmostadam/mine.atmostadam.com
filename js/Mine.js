import { InventoryColumn } from "./layout/InventoryColumn.js";
import { MiningColumn } from "./layout/MiningColumn.js";
import { SmeltingColumn } from "./layout/SmeltingColumn.js";
import { SmithingColumn } from "./layout/SmithingColumn.js";
import { MarketColumn } from "./layout/MarketColumn.js";
import { Footer } from "./layout/Footer.js";
import { Header } from "./layout/Header.js";
import { GameCache } from "./persistence/GameCache.js";
import { Currency } from "./model/Currency.js";
import { Inventory } from "./model/Inventory.js";
import { MouseListener } from "./listener/MouseListener.js";
import { InventoryDecorator } from "./decorator/InventoryDecorator.js";
import { CurrencyDecorator } from "./decorator/CurrencyDecorator.js";
import { HiddenStateStaticHandler } from "./handler/HiddenStateStaticHandler.js";
import { ScrollingTextHandler } from "./handler/ScrollingTextHandler.js";
import { Log } from "https://atmostadam.github.io/game-library/logger/Log.js";
import { registerGameLoop } from "https://atmostadam.github.io/game-library/gamedev.js";
import { TinRock } from "./component/TinRock.js";
import { TinOre } from "./component/TinOre.js";

window.addEventListener("load", function () {
    const canvas = document.getElementById("game-canvas");
    registerGameLoop(new Mine(canvas, canvas.getContext("2d")));
});

export class Mine {
    constructor(canvas, ctx) {
        new Log(true, true);
        Log.info("Executing prerequiste steps for Game Loop in constructor.", this);

        this.canvas = canvas;
        this.ctx = ctx;

        new GameCache(canvas, ctx);

        new HiddenStateStaticHandler();
        new ScrollingTextHandler();

        new MouseListener();

        new InventoryDecorator(new Inventory(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        new CurrencyDecorator(new Currency(0, 0, 0));

        const margin = 5;

        const headerSize = 60;
        const footerSize = 60;

        const bodyX = margin;
        const bodyY = margin + headerSize;

        const bodyWidth = canvas.width - margin - bodyX;
        const bodyHeight = canvas.height - margin - footerSize - bodyY;

        const bodyWidthOneFifth = bodyWidth / 5;
        const bodyWidthTwoFifths = bodyWidthOneFifth * 2;
        const bodyWidthThreeFifths = bodyWidthOneFifth * 3;
        const bodyWidthFourFifths = bodyWidthOneFifth * 4;

        this.header = new Header(bodyWidth, headerSize, margin, margin);
        this.market = new MarketColumn(margin, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.smithing = new SmithingColumn(margin + bodyWidthOneFifth, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.smelting = new SmeltingColumn(margin + bodyWidthTwoFifths, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.mining = new MiningColumn(margin + bodyWidthThreeFifths, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.inventory = new InventoryColumn(margin + bodyWidthFourFifths, bodyY, bodyWidthOneFifth, bodyHeight, "#add8e6");
        this.footer = new Footer(bodyWidth, footerSize, margin, canvas.height - margin - footerSize);

        this.tick = 0;

        GameCache.setClass(new TinRock());
        GameCache.setClass(new TinOre());
    }

    update(tick) {
        this.tick = tick;
        this.mining.update(this.tick);
        this.smelting.update(this.tick);
        this.smithing.update(this.tick);
        this.market.update(this.tick);
        this.inventory.update(this.tick);
        this.header.update(this.tick);
        this.footer.update(this.tick);
    }

    draw() {
        this.mining.draw();
        this.smelting.draw();
        this.smithing.draw();
        this.market.draw();
        this.inventory.draw();
        this.header.draw();
        this.footer.draw();
    }
}
