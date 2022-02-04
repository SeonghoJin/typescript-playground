https://github.com/microsoft/TypeScript/issues/47710

type DecoratedFoo = ({ isString: true } & StringFoo) | { isString: false; VfooString?: string }

DecoreatedFoo는 Union Type고 타입이 확장되어 사용하기 위해서는 둘 중 하나의 타입으로 좁혀야 하는 상황이다.

타입을 좁히기 위해서는 TypeGuard를 이용하거나 Type assertion을 이용하면 되는데, 여기서는 TypeGuard를 이용했다.

issue를 한 사람은 spread를 이용해 decoreate함수를 만들려고 했지만, 실패하고 삼항 연산자를 이용해 해결했다..

사용자는 왜 spread를 이용하면 type checking이 안되는지 물어보았고, issue 태그로 Design Limitation을 걸어 두었다.

---

일단 spread를 이용한 typechecking이 안되는 이유는 그냥 spread를 이용해서 그렇다. spread를 이용하면 type이 확장된다. 즉 isString = true | false가 된다. DecoratedFoo에서 isString이 true이고 StringFoo Type이여야 하는데 확장이 되어버리면 isString = true | false & StringFooType이 되어버려 DecoratedFoo Type이 되지 못한다.

즉 타입 확장은 어느 한 property의 가능성을 조합하는 거지 다른 property를 고려하지 않는ㄷ.


헌재 spread로 반환된 타입은
{
fooString?: string | undefined;
isString: boolean;
}

이고 매우 간단하다. 왜냐하면 각 프로퍼티마다 타입이 확장되었기 때문이다. 

issue를 한 사람이 의도한 대로 Typescript가 만들어진다면 다음과 같은 조합이 만들어질 것이다.
isString이 true, fooString이 undefined인 타입, isString이 true이고 fooString이 string이 타입, 

isString이 false, fooString이 undefined인 타입, isString이 false이고 fooString이 string이 타입, 
벌써 총 4개가 나왔다..