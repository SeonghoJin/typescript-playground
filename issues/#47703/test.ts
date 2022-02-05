(() => {

    type Obj = { "a": string };
    type Key = keyof Obj;
    type Value = Obj[Key];
    type PartialObj = Partial<Obj>;


    function bar<T, K extends keyof T>(obj: T, prop: K): Partial<T> {
        return obj[prop];
    }

    const testValue: Obj = { a: "Hello" };

    const result = bar(testValue, "a");
    console.log(result);

})();

type CustomPartialType = Partial<"ASD" | { "asd": "Te" } | 7 | 100 | 12398139128390>;