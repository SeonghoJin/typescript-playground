// https://github.com/microsoft/TypeScript/issues/47711

type Either<E, A> = Left<E> | Right<A>;
type Left<E> = { tag: 'Left', e: E };
type Right<A> = { tag: 'Right', a: A };

const mkLeft = <E>(e: E): Either<E, never> => ({ tag: 'Left', e });
const mkRight = <A>(a: A): Either<never, A> => ({ tag: 'Right', a });

// I tried omitting the `implements` cause here but the behavior did not change.
class EPromise<E, A> implements PromiseLike<A> {
    static succeed<A>(a: A): EPromise<never, A> {
        return new EPromise(Promise.resolve(mkRight(a)));
    }

    static fail<E>(e: E): EPromise<E, never> {
        return new EPromise(Promise.resolve(mkLeft(e)));
    }

    constructor(readonly p: PromiseLike<Either<E, A>>) { }

    then<B = A, B1 = never>(
        // EPromise can act as a Thenable only when `E` is `never`.
        this: EPromise<never, A>,
        onfulfilled?: ((value: A) => B | PromiseLike<B>) | null | undefined,
        onrejected?: ((reason: any) => B1 | PromiseLike<B1>) | null | undefined
    ): PromiseLike<B | B1> {
        return this.p.then(
            // Casting to `Right<A>` is safe here because we've eliminated the possibility of `Left<E>`.
            either => onfulfilled?.((either as Right<A>).a) ?? (either as Right<A>).a as unknown as B,
            onrejected
        )
    }
}
const withTypedFailure: EPromise<number, string> = EPromise.fail(1);
const withTypeSuceed: EPromise<never, string> = EPromise.succeed("1");

// Errors as expected:
//
// "The 'this' context of type 'EPromise<number, string>' is not assignable to method's
//     'this' of type 'EPromise<never, string>"
withTypedFailure.then(s => s.toUpperCase()).then(console.log);
withTypeSuceed.then(s => s.toUpperCase()).then(console.log);

async function test() {
    // Does not produce an equivalent error.
    // We're attempting to access property `a` of a `Right<string>` but in reality we have a `Left<number>`,
    // meaning that `str` here is `undefined`.
    const str = await withTypedFailure;

    // This will now cause a runtime error.
    return str.toUpperCase();
}

test()
    .then(console.log)
    .catch(console.error) // [ERR]: Cannot read properties of undefined (reading 'toUpperCase')