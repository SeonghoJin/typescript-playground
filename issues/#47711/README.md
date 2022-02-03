42번째 줄 :
EPromise<number, string> 타입에 EProimse<number, never> 타입이 어떻게 들어갈 수 있는가?

Either<E, A> = Left<E> | Right<A>와 같다.
따라서 Either<number, string> = Left<number> | Right<string>와 같다.

constructor readonly p type의 PromiseLike<Either<E,A>>는 다음과 같이 풀 수 있다.
PromiseLike<Left<number> | Right<string>>

// Promise가 PromiseLike의 상위집합이므로 Promise.resolve는 ProimseLike를 반환한다고 할 수 있다. 따라서
fail 함수에서 Promise.resolve(mkLeft(e))는 PromiseLike<Either<E, never>>을 반환한다.
PromiseLike<Either<E, never>>는 결국 PromisLike<Left<number>>이므로 constructor readonly p type (ProimseLike<Left<number> | Right<string>>에 할당할 수 있다.

then을 이용한 type check는 되는데 async-await을 이용하니 type check가 안되서 버그 issue를 보낸 것 같다.
자세히 알려면 typescript가 async-await type check를 어떻게 하는지 알아봐야할 것 같은데...
