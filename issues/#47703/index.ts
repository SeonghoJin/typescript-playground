function fn1<T>(a: T, b: Partial<T>): Partial<T> {
    console.log(b);
    return b;
}

function test<T, K extends keyof T>(obj: T, prop: K) {
    const temp: Partial<T> = {};
    temp[prop] = obj[prop];
    const temp2: T[K] = obj[prop];
    return fn1(obj, temp2);
}

const myObj = {
    "test1": "test1",
    "test2": "test2",
}

type MyObjType = typeof myObj;
type MyObjKeyType = keyof MyObjType;
type MyObjValueType = MyObjType[MyObjKeyType];
type ParitalMyObjType = Partial<MyObjType>;

test<MyObjType, 'test1' | 'test2'>(myObj, "test1");
