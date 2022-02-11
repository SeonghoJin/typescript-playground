# very hard

Wed Feb 09 2022 20:50:48 GMT+0900 (대한민국 표준시)
https://github.com/microsoft/TypeScript/issues/47634

함수 호출은 다음과 같은 경우 assertion call or never-returning call로 분류 된다.

- the call occurs as a top-level expression statement
- the call specifies a single identifier or a dotted sequence of identifiers for the function name
- each identifier in the function name references an entity with an explicit type
- the function name resolves to a function type with an asserts return type or an explicit never return type annotation.

// 최상위 구문구문과 관련된 내용. C#과 관련된 내용이지만 비슷하니깐..
https://www.educative.io/edpresso/what-are-top-level-statements-in-c-sharp-90

이 이슈와 관련이 있다는 답변이 있다.
// Assertions in control flow analysis
https://github.com/microsoft/TypeScript/pull/32695
