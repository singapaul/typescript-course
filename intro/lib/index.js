"use strict";
// Below are the primitive types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let isPresent = false;
let magic = 44;
let hello = "Hello";
let notDefined = undefined;
let notPresent = null;
let penta = Symbol("star");
// JS has built in classes for regex and arrays
let regex = new RegExp("ab+c");
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
// Tuples
// we can only assign an array of length 2, where both elements are numbers
let tuple = [0, 0];
// we can only assign an array of length 2, where one is a number and one is a string
let tuple2 = [0, "Paul"];
// Objects
let center = {
    x: 0,
    y: 0,
};
let altCenter = { x: 2, y: 10 };
// Advantage of type aliases 1. Removes code duplication 2. Lets us specify/name our intent with objects (more readable)
// functions
function add(a, b) {
    return a + b;
}
// functions don't have to return anything
function log(message) {
    console.log(message);
}
// typescript lets us use rest parameters for an indefinite number of arguments e.g.
function sum(...values) {
    return values.reduce((prev, current) => {
        return prev + current;
    });
}
let add2;
add2 = (a, b) => a + b;
// Imagine two different types with overlapping arguments
// We can assign an argument with more parameters than reqired e.g. a 3D point to a 2D point without compile time errors.
// This is called duck typing
// However we cannot assign a point with less parameters than EXPECTED arguments
// We can create generic classes/functions which can take any type, but always the same type e.g.
// We can add type arguments to ensure type relationships are maintained
class Queue {
    constructor() {
        this.data = [];
    }
}
const queue = new Queue();
// Special types
// 1. any - escape hatch in the type system
// 2. unknown - if you want to use it as a String, you have to check the current type being returned - safer than any. It will still run but
// will show an error in the code base with a warning
let h;
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
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const mainAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    yield delay(1000);
    console.log("1s");
    yield delay(2000);
    console.log("2s");
    yield delay(3000);
    console.log("3s");
});
mainAsync();
const point2 = { x: 10, y: 10 };
point2.x = 2;
point2.y = 3;
// Union types allow us to allow a variable to be one of 2 types e.g.
// Below function will take a string or a string array
function padLeft(value) {
    return 10;
}
// Typescript lets us use string literals to ensure a value is writtten exactly -> like an enum
let direction;
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
