const emptyObject = {};
const anUndefinedProperty: undefined = emptyObject["anything"];

const searchResults = {
    video: { name: "LEGO Movie" },
    text: null,
    audio: { name: "LEGO Movie Soundtrack" }
}

type PotentialString = string | undefined | null;

declare function getID(): PotentialString;

const userId = getID();
userId?.toUpperCase();

const definitelyString1 = getID() as string;
const definitelyString2 = getID()!;