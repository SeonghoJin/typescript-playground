const jsonParser = (jsonString: string) => JSON.parse(jsonString);
const myAccount = jsonParser(`{"name":"Dorothea"}`);
myAccount.name;
myAccount.email;

const jsonParserUnkown = (jsonString: string): unknown => JSON.parse(jsonString);

const myOtherAccount = jsonParserUnkown(`{"name" : "Samuel"}`);

// myOtherAccount.name; 

type User = { name: string };
const realUserAccount = myOtherAccount as User;

const neverReturns = () => {
    throw new Error("Always throws, never returns");
}


const myValue = neverReturns();

const validateUser = (user: User) => {
    if (user) {
        return user.name !== "Nan";
    }

    return neverReturns();
}

enum Flower {
    Rose,
    Rhododendron,
    Violet,
    Daisy,
    Tulip,
  }
  
  const flowerLatinName = (flower: Flower) => {
    switch (flower) {
      case Flower.Rose:
        return "Rosa rubiginosa";
      case Flower.Rhododendron:
        return "Rhododendron ferrugineum";
      case Flower.Violet:
        return "Viola reichenbachiana";
      case Flower.Daisy:
        return "Bellis perennis";
  
      default:
        // const _exhaustiveCheck: never = flower;
        // return _exhaustiveCheck;
    }
  };