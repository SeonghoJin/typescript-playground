type StringOrNumber = string | number;
type ProcessStates = "open" | "closed";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
type AMessyUion = "hello" | 156 | { error: true };
type WindowStates = "open" | "closed" | "minimized" | string;
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

interface ArtistsData {
    artists: { name: string }[];
}

type ArtworkEsponse = ArtworksData & ErrorHandling;
type ArtistsResposne = ArtistsData & ErrorHandling;

const handleArtitsResponse = (response: ArtistsResposne) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
}


interface CreateArtitesBioBase {
    artitsId: string;
    thirdParty?: boolean;
}

type CreateArtitesBioBaseRequest = CreateArtitesBioBase & ({ html: string } | { markdown: string });

const workingRequest: CreateArtitesBioBaseRequest = {
    artitsId: "bansky",
    markdown: "hello",
}

const badRequest: CreateArtitesBioBaseRequest = {
    artitsId: "bansky",
    html: "<></>"
}
