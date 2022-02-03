const helloWorld = "Hello World";
let hiworld = "Hi World";

declare function allowsAnyString(arg: string): any;
allowsAnyString(helloWorld);
allowsAnyString(hiworld);

declare function allowOnlyHello(arg: "Hello World"): any;
allowOnlyHello(helloWorld);
allowOnlyHello(hiworld);

declare function allowsFirstFiveNumbers(arg: 1 | 2 | 3 | 4 | 5): any;
allowsFirstFiveNumbers(1);
allowsFirstFiveNumbers(123);

const myUser = {
    name: 'Sabrina',
};

myUser.name = "TEST";

const myUnchangingUser = {
    name: "Fatma",
} as const;

myUnchangingUser.name = "Raissa";

const exampleUser = [{name: "Brian"}, {name: "Fahrooq"}] as const;

exampleUser.map((user) => {
    user.name
})