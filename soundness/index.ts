const usersAge = ("23" as any) as number;

interface InputEvent {
    timeStamp: number;
}

interface MouseInputEvent extends InputEvent {
    x: number;
    y: number;
}

interface KeyboardInputEvent extends InputEvent {
    keyCode: number;
}

function listenForEvent(eventType: "keyboard" | "mouse", handler: (event: InputEvent) => void) {

}


const getPI = () => 3.14;

function runFunction(func: () => void) {
    console.log(func());
}

runFunction(getPI);