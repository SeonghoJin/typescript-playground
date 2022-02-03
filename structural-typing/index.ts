interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;

interface Tube {
    diameter: number;
    length: number;
}

let tube: Tube = { diameter: 12, length: 3 };

tube = ball;
ball = tube;

let createBall = (diameter: number) => ({ diameter });
let createSphere = (diameter: number, useInchines: boolean) => {
    return { diameter: useInchines ? diameter * 0.39 : diameter }
}

createSphere = createBall;
createBall = createSphere;

let createRedBall = (diameter: number) => ({ diameter, color: 'red' });

createBall = createRedBall;
createRedBall = createBall;