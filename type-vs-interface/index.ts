type BirdType = {
    wings: 2;
}

interface BirdInterface {
    wings: 2;
}

const bird1: BirdType = {
    wings: 2
}

const bird2: BirdInterface = {
    wings: 2
}

const bird3: BirdInterface = bird1;

type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdInterface;

interface Peacok extends BirdType {
    colorful: true;
    flies: false;
}

interface Chicken extends BirdInterface {
    colorful: false;
    flies: false;
}

let owl: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = {
    colorful: false,
    flies: false,
    wings: 2
};

owl = chicken;
chicken = owl;

interface Kitten {
    purrs: boolean;
}

interface Kitten {
    color: string;
}

let kitten: Kitten = {
    purrs: false,
    color: ""
}

type Puppy = {
    color: string;
};

type Puppy = {
    toys: number;
};

