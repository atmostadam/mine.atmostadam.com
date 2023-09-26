import { InventoryColumn } from "./layout/InventoryColumn.js";
import { MiningColumn } from "./layout/MiningColumn.js";
import { SmeltingColumn } from "./layout/SmeltingColumn.js";
import { SmithingColumn } from "./layout/SmithingColumn.js"
import { MarketColumn } from "./layout/MarketColumn.js";

const COLOR_GREEN = "green";
const COLOR_RED = "red";
const COLOR_BLUE = "blue";
const COLOR_ORANGE = "orange";
const COLOR_PURPLE = "purple";

export class Mine {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        const margin = 20;

        const headerSize = 100;
        const footerSize = 100;

        const bodyX = margin;
        const bodyY = margin + headerSize;

        const bodyWidth = canvas.width - margin - bodyX;
        const bodyHeight = canvas.height - margin - footerSize - bodyY;

        const bodyWidthOneFifth = bodyWidth / 5;
        const bodyWidthTwoFifths = bodyWidthOneFifth * 2;
        const bodyWidthThreeFifths = bodyWidthOneFifth * 3;
        const bodyWidthFourFifths = bodyWidthOneFifth * 4;

        this.market = new MarketColumn(ctx, margin, bodyY, bodyWidthOneFifth, bodyHeight, COLOR_RED);
        this.smithing = new SmithingColumn(ctx, margin + bodyWidthOneFifth, bodyY, bodyWidthOneFifth, bodyHeight, COLOR_GREEN);
        this.smelting = new SmeltingColumn(ctx, margin + bodyWidthTwoFifths, bodyY, bodyWidthOneFifth, bodyHeight, COLOR_PURPLE);
        this.mining = new MiningColumn(ctx, margin + bodyWidthThreeFifths, bodyY, bodyWidthOneFifth, bodyHeight, COLOR_BLUE);
        this.inventory = new InventoryColumn(ctx, margin + bodyWidthFourFifths, bodyY, bodyWidthOneFifth, bodyHeight, COLOR_ORANGE);
    }

    update() {

    }

    draw() {
        this.market.draw();
        this.smithing.draw();
        this.smelting.draw();
        this.mining.draw();
        this.inventory.draw();
    }
}
