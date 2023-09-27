export class GameCache {
    constructor(canvas, ctx) {
        GameCache.COLOR_GREEN = "green";
        GameCache.COLOR_RED = "red";
        GameCache.COLOR_BLUE = "blue";
        GameCache.COLOR_ORANGE = "orange";
        GameCache.COLOR_PURPLE = "purple";

        GameCache.map = new Map();
        GameCache.canvas = canvas;
        GameCache.ctx = ctx;
    }

    static set(key, value) {
        GameCache.map.set(key, value);
    }

    static setClass(clazz) {
        GameCache.set(clazz.constructor.name, clazz);
    }

    static get(key) {
        return GameCache.map.get(key);
    }

    static contains(key) {
        return GameCache.map.has(key);
    }

    static delete(key) {
        return GameCache.map.delete(key);
    }

    static clear() {
        GameCache.map.clear();
    }

    static getCtx() {
        return GameCache.ctx;
    }

    static getCanvas() {
        return GameCache.canvas;
    }
}