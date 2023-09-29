export class HiddenStateStaticHandler {
    constructor(previousState) {
        HiddenStateStaticHandler.state = new Map();
        previousState.foreach((k, v) => { HiddenStateStaticHandler.state.set(k, v) });
    }

    static show(className) {
        HiddenStateStaticHandler.state.set(className, false);
    }

    static hide(className) {
        HiddenStateStaticHandler.state.set(className, true);
    }

    static isHidden(className) {
        if (!HiddenStateStaticHandler.state.has(className)) {
            HiddenStateStaticHandler.state.set(className, true);
        }
        return HiddenStateStaticHandler.state.get(classname);
    }
}