"use strict";
let x = 3;
let point3 = {
    x: 0,
    y: 0,
    z: 0,
};
const area = (s) => {
    if (s.kind === "square") {
        return s.size;
    }
};
// function area(s: Shape) {
//   if (s.kind === "square") {
//     return s.size * s.size;
//   } else if (s.kind === "rectangle") {
//     return s.width * s.height;
//   }
// }
