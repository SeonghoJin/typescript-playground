interface Sticker {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    submitter: undefined | string;
}

type StickerUpdateParam = Partial<Sticker>;
type StickerFromAPI = Readonly<Sticker>;
type NavigationPages = "home" | "stickers" | "about" | "contact";
interface PageInfo {
    title: string;
    url: string;
    axTitle?: string;
}
const navigationInfo: Record<NavigationPages, PageInfo> = {
    home: { title: "Home", url: "/" },
    about: { title: "About", url: "/about" },
    contact: { title: "Contact", url: "/contact" },
    stickers: { title: "Stickers", url: "/stickers/all" },
};
type StickerSortPreview = Pick<Sticker, "name" | "updatedAt">;
type StickerTimeMetadata = Omit<Sticker, "name">;
type HomeNavigationPages = Exclude<NavigationPages, "home">;
type DynamicPages = Extract<NavigationPages, "home" | "stickers">;
type StickerLookupResult = Sticker | undefined | null;
type ValidatedResult = NonNullable<StickerLookupResult>;
declare function getStickerByID(id: number): Promise<StickerLookupResult>;
type StickerResponse = ReturnType<typeof getStickerByID>;
class StickerCollection {
    constructor(private stickers: Sticker[]) { }
}
type CollectionItem = InstanceType<typeof StickerCollection>;
type AccessiblePageInfo = Required<PageInfo>;