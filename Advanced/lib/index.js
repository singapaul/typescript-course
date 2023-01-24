"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eijfew = 4;
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}
function assertDate(value) {
    if (value instanceof Date)
        return;
    else
        throw new TypeError("Value is not a date");
}
// Assertion function are useful when writing tests
// remember we can overload functions
// We can use a const assertion to make objects immutable and read only e.g.
const dave = {
    name: "dave",
    role: "drummer",
    skills: ["headbanging", "alt rock"],
};
// we can assert only certain values are const
const layout = (settings) => {
    console.log(settings);
};
const example = {
    align: "left",
    padding: 0,
};
layout(example);
// We can get TypeScript to generate a type based on existing code in the project.
// e.g.
const center4 = {
    x: 0,
    y: 0,
    z: 0,
};
const john = {
    name: "John",
    age: 23,
    location: "Melk",
};
function logGet(obj, key) {
    const value = obj[key];
    return value;
}
function logSet(obj, key, value) {
    obj[key] = value;
}
const age = logGet(john, "age");
// Executed in the runtime
const isNumber = (value) => {
    typeof value === "number" ? "number" : "other";
};
