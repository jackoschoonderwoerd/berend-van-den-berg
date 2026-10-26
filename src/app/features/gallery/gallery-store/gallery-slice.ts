

export interface GalleryImage {
    src: string;
    width: number;
    height: number;
    alt?: string
}

export type GallerySlice = {
    readonly galleryImages: GalleryImage[];


}

// export type PersistedAppStoreSlice = Pick<AppStoreSlice, 'drinkCategories'>

export const initialGallerySlice: GallerySlice = {
    galleryImages: [
        {
            src: '/gallery/-1.webp',
            width: 300,
            height: 425,
            alt: ''
        },
        {
            src: '/gallery/-2.webp',
            width: 300,
            height: 199,
            alt: ''
        },
        {
            src: '/gallery/-3.webp',
            width: 300,
            height: 199,
            alt: ''
        },
        {
            src: '/gallery/2014-11-30+13.15.28.webp',
            width: 1000,
            height: 747,
            alt: ''
        },
        {
            src: '/gallery/4609889600_9ff56756b9+(1).webp',
            width: 338,
            height: 500,
            alt: ''
        },



    ],


}
