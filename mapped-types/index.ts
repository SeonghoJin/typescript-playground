interface Artist {
    id: number;
    name: string;
    bio: string;
}

interface ArtistForEdit {
    id: number;
    name?: string;
    bio?: string;
}

type MyPartialType<Type> = {
    [Property in keyof Type]?: Type[Property]
}

type MappedArtistForEdit = MyPartialType<Artist>;

type MyPartialTypeForEdit<Type> = {
    [Property in keyof Type]?: Type[Property];
} & { id: number };

type CorrectMappedArtistForEdit = MyPartialTypeForEdit<Artist>;

type SeonghoArtistForEdit = Partial<Artist> & {
    id: number
}