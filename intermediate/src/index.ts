let x: number = 3;

// We can include optional parameters with a ?

type Person = {
  name: String;
  age?: number;
};

// We can use interfaces as well

interface Point2D {
  x: number;
  y: number;
}

interface Point3D extends Point2D {
  z: number;
}

let point3: Point3D = {
  x: 0,
  y: 0,
  z: 0,
};

// type vs interface

// Acheieve similar outcomes.
// use types for unions, intersections, primitives, shorthand functions, advanved type functions
// use interfaces for declaration merging and familiarity (extends)

// type: never will never return

type Square = {
  kind: "square";
  size: number;
};

type Rectangle = {
  kind: "square";
  width: number;
  height: number;
};

type Shape =  Square |Rectangle;

const area = (s: Shape) => {
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
