type StringFoo = { fooString: "string" }
type RawFoo = { fooString?: string }
type DecoratedFoo = ({ isString: true } & StringFoo) | { isString: false; VfooString?: string }

function isStringFoo(foo: RawFoo): foo is StringFoo {
    return foo.fooString !== undefined
}

function decorate(foo: RawFoo) {
    // try 1:
    //
    // I would expect the below commented out return statement to work,
    // since they are the same expression as the broken up ternary below it 
    //
    // return {
    //     isString: isStringFoo(foo),
    //     ...foo
    // }

    // try 2:
    //
    // I thought maybe pulling out the typeguard into its own aliased discriminant
    // might make typescript realize the types, but this still fails typechecking 
    // 
    const isString = isStringFoo(foo)
    return {
        isString,
        ...foo
    }

    // return isString ? {
    //     isString,
    //     ...foo
    // } : {
    //     isString,
    //     ...foo
    // }
}

(() => {
    const temp = decorate({
        fooString: "temp"
    })
})()