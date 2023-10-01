import { BaseDrawing } from "../base/BaseDrawing.js";

export class BaseHiddenDrawing extends BaseDrawing {
    constructor() {
        super();
        this.hidden = true;
    }

    show() {
        this.hidden = false;
    }
}