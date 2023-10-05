import { Drawing } from "https://atmostadam.github.io/game-library/base/Drawing.js";

export class BaseHiddenDrawing extends Drawing {
    constructor() {
        super();
        this.hidden = true;
    }

    show() {
        this.hidden = false;
    }
}