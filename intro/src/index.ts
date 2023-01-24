// Below are the primitive types

let isPresent: boolean = false;
let magic: number = 44;
let hello: String = "Hello";

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: Symbol = Symbol("star");

// JS has built in classes for regex and arrays

let regex: RegExp = new RegExp("ab+c");

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

// Tuples
// we can only assign an array of length 2, where both elements are numbers
let tuple: [number, number] = [0, 0];
// we can only assign an array of length 2, where one is a number and one is a string
let tuple2: [number, String] = [0, "Paul"];

// Objects

let center: { x: number; y: number } = {
  x: 0,
  y: 0,
};

// We can save time with a type alias e.g.

type Point = { x: number; y: number };

let altCenter: Point = { x: 2, y: 10 };

// Advantage of type aliases 1. Removes code duplication 2. Lets us specify/name our intent with objects (more readable)

// functions

function add(a: number, b: number): number {
  return a + b;
}

// functions don't have to return anything

function log(message: String) {
  console.log(message);
}

// typescript lets us use rest parameters for an indefinite number of arguments e.g.

function sum(...values: number[]) {
  return values.reduce((prev, current) => {
    return prev + current;
  });
}

// We can type alias functions

type Add = (a: number, b: number) => number;

let add2: Add;

add2 = (a, b) => a + b;

// Imagine two different types with overlapping arguments
// We can assign an argument with more parameters than reqired e.g. a 3D point to a 2D point without compile time errors.
// This is called duck typing
// However we cannot assign a point with less parameters than EXPECTED arguments

// We can create generic classes/functions which can take any type, but always the same type e.g.
// We can add type arguments to ensure type relationships are maintained

class Queue<T> {
  data = [];
}

const queue = new Queue<number>();

// Special types
// 1. any - escape hatch in the type system
// 2. unknown - if you want to use it as a String, you have to check the current type being returned - safer than any. It will still run but
// will show an error in the code base with a warning

let h: unknown;

// Importing modules
// import {} from "./location" is the standard syntax
// or
// import * as utils from "./utils"
// utils.functionname()

// Environment variables

// we access with process.env.VARIABLE_NAME
// They can error so we can write

declare const process: any;

// we can also write a delaration file
// e.g make a env.d.ts file
// then we write our declarations in the file.

// There is a much better way though.

// npm i @types/node

// Our errors will then be stopped

// We will have errors with standard packages like express. To get around this we can just install a package with the types in:

// npm i @types/express
// This will eliminate the errors in our IDE

// Async Code
// Based on JS promises

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const mainAsync = async () => {
  await delay(1000);
  console.log("1s");
  await delay(2000);
  console.log("2s");
  await delay(3000);
  console.log("3s");
};

mainAsync();

// Typescript allows us to reassign object values e.g.
// Read only modifier
type Point2 = { x: number; readonly y: number };

const point2: Point2 = { x: 10, y: 10 };

point2.x = 2;
point2.y = 3;

// Union types allow us to allow a variable to be one of 2 types e.g.
// Below function will take a string or a string array
function padLeft(value: string | string[]): number {
  return 10;
}

// Typescript lets us use string literals to ensure a value is writtten exactly -> like an enum

let direction: "North" | "South" | "East" | "West";

// But we could have also made a type declaration instead

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
  return (Math.floor(Math.random() * 6) + 1) as DiceValue;
}


