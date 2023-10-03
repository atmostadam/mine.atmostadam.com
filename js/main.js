import { Mine } from "./Mine.js";
import { registerImplementationClass } from "https://atmostadam.github.io/game-library/gamedev.js";

window.addEventListener("load", function () {
    const canvas = document.getElementById("game-canvas");
    registerImplementationClass(new Mine(canvas, canvas.getContext("2d")));
});

/*
window.addEventListener("load", function () {
    console.log("Starting Game...");

    var lastTime = performance.now();
    const minMsPerFrame = 1000 / 60;
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    const game = new Mine(canvas, ctx);

    function animate() {
        try {
            const time = performance.now();

            if ((time - lastTime) < minMsPerFrame) {
                window.requestAnimationFrame(animate);
                return;
            }

            game.ctx.clearRect(0, 0, canvas.width, canvas.height);
            game.update();
            game.draw();

            window.requestAnimationFrame(animate);

            lastTime = time;
        } catch (e) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.error("APPLICATION HAS CRASHED!", e, this);
            throw e;
        }
    }
    animate();
});

export function between(n, min, max) {
    if (n > min && n < max) {
        return true;
    }
    return false;
}
*/