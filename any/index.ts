const myObject = JSON.parse("{}");

// Runtime Error
myObject.x.y.z;

declare function debug(value: any): void;
declare function swap(x: [number, string]) : [string, number];
declare const pair : [any, any];
swap(pair);

