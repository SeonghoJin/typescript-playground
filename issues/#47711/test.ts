type TestType<T> = string;

const myNever: TestType<never> = "1";
let temp: TestType<string> = myNever;
