interface Order {
    address: string;
}

interface TelephoneOrder extends Order {
    callerNumber: string;
}

interface InternetOrder extends Order {
    email: string;
}

type PossibleOrders = TelephoneOrder | InternetOrder | undefined;

declare function getOrder(): PossibleOrders;
const possibleOrder = getOrder();

if ("email" in possibleOrder) {
    const mustBeInternetOrder = possibleOrder;
}

class TelephoneOrderClass {
    address: string;
    callerNumber: string;
}

if (possibleOrder instanceof TelephoneOrderClass) {
    const mustBeTelephoneOrder = possibleOrder;
}

if (typeof possibleOrder === "undefined") {
    const definitelyNotAnOrder = possibleOrder;
}

function isAnInternet(order: PossibleOrders): order is InternetOrder {
    return order && "email" in order;
}


