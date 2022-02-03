type ArtWorkSearchResponse = {
    artists: {
        name: string;
        artworks: {
            name: string;
            deathdate: string | null;
            bio: string;
        }[]
    }[]
}

interface Artwork {
    name: string;
    deathdata: string | null;
    bio: string;
}

type InfferedArtwork = ArtWorkSearchResponse["artists"][0]["artworks"][0];
