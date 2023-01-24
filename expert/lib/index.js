"use strict";
let numberee = "efwef";
class Circle {
    constructor(config) {
        var _a, _b;
        this.config = {
            color: (_a = config.color) !== null && _a !== void 0 ? _a : "green",
            radius: (_b = config.radius) !== null && _b !== void 0 ? _b : 0,
        };
    }
    draw() {
        console.log(this.config.color, this.config.radius);
    }
}
