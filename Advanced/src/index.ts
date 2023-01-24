import { skipPartiallyEmittedExpressions } from "typescript";

const eijfew: number = 4;

type Person = {
  name: String;
  dateofBirth?: Date;
};

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertDate(value: unknown): asserts value is Date {
  if (value instanceof Date) return;
  else throw new TypeError("Value is not a date");
}

// Assertion function are useful when writing tests
// remember we can overload functions

// We can use a const assertion to make objects immutable and read only e.g.

const dave = {
  name: "dave",
  role: "drummer",
  skills: ["headbanging", "alt rock"],
} as const;

// we can assert only certain values are const

const layout = (settings: {
  align: "left" | "right" | "center";
  padding: number;
}) => {
  console.log(settings);
};

const example = {
  align: "left" as const,
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

type InferredPoint = typeof center4;

// Lookup types

// KeyofType

// we can simplify our keys and functions with generics by using keyof

type Person2 = {
  name: String;
  age: number;
  location: String;
};

const john: Person2 = {
  name: "John",
  age: 23,
  location: "Melk",
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];
  return value;
}

function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  obj[key] = value;
}

const age = logGet(john, "age");

// Generic Types

// Executed in the compile time
type IsNumber<T> = T extends number ? "number" : "other";

// Executed in the runtime
const isNumber = (value: unknown) => {
  typeof value === "number" ? "number" : "other";
};


