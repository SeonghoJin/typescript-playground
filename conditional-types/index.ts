type Cat = { meows: true };
type Dog = { barks: true };
type Cheetah = { meows: true; fast: true };
type Wolf = { barks: true; howls: true };

type ExtractDogish<A> = A extends { barks: true } ? A : never;
type ExpectedNeverCat = ExtractDogish<Cat>;
type ExpectedWolf = ExtractDogish<Wolf>;
type Animals = Cat | Dog | Cheetah | Wolf;
type Dogish = ExtractDogish<Animals>;

declare function getId<T extends boolean>(fancy: T): T extends true ? string : number;
let stringReturnValue = getId(true);
let numberReturnValue = getId(false);
let stringOrNumber = getId(Math.random() < 0.5);
declare function isCatish<T>(x: T): T extends { meows: true } ? T : undefined;

type GetReturnValue<T> = T extends (...args: any[]) => infer R ? R : T;
type getIDReturn = GetReturnValue<typeof getId>;
type getCat = GetReturnValue<Cat>;

type MyType<T> = T extends infer R ? R : never;
type T1 = MyType<{ b: string }> // T1 is { b: string; }
type MyType2<T> = T extends infer R2 ? R2 : never; // error, R2 undeclared
