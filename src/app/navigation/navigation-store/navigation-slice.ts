

export interface MenuItem {
    nl: string;
    en: string;
    slug: string;
    subMenuItems?: MenuItem[]
}

export type NavigationSlice = {
    readonly menuItems: MenuItem[];
    readonly sidenavOpen: boolean

}

// export type PersistedAppStoreSlice = Pick<AppStoreSlice, 'drinkCategories'>

export const initialNavigationSlice: NavigationSlice = {
    menuItems: [
        {
            nl: 'home',
            en: 'home',
            slug: 'home'
        },
        {
            nl: 'nieuws',
            en: 'news',
            slug: 'news'
        },
        {
            nl: 'agenda',
            en: 'calendar',
            slug: 'calendar'
        },
        {
            nl: 'recensies',
            en: 'reviews',
            slug: 'reviews'
        },
        {
            nl: 'gallery',
            en: 'gallery',
            slug: 'gallery'
        },
        {
            nl: 'bands',
            en: 'bands',
            slug: 'bands',
            subMenuItems: [
                {
                    nl: 'het octet',
                    en: 'the octet',
                    slug: 'bands/the-octet'
                },
                {
                    nl: 'trio, njq',
                    en: 'trio, njq',
                    slug: 'bands/trio-njq'
                },
                {
                    nl: 'astrid seriese,\ninvitation',
                    en: 'astrid seriese,\ninvitation',
                    slug: 'bands/astrid-seriese'
                },
                {
                    nl: 'soesja citroen',
                    en: 'soesja citroen',
                    slug: 'soesja-citroen'
                },
                {
                    nl: 'mathilde santing',
                    en: 'mathilde santing',
                    slug: 'mathilde-santing'
                },
                {
                    nl: 'hans mantel',
                    en: 'hans mantel',
                    slug: 'hans-mantel'
                },
                {
                    nl: 'menno daams,\nthomas w. andersen',
                    en: 'menno daams,\nthomas w. andersen',
                    slug: 'daams-andersen'
                },
                {
                    nl: 'frank grasso,\nann burton',
                    en: 'frank grasso,\nann burton',
                    slug: 'grasso-burton'
                },
                {
                    nl: 'ellen helmus, drie\ntenoren + trio',
                    en: 'ellen helmus, drie\ntenoren + trio',
                    slug: 'helmus-tenoren-trio'
                },
                {
                    nl: 'anne chris,\njellyfish festival',
                    en: 'anne chris,\njellyfish festival',
                    slug: 'chris-jellyfish'
                },
                {
                    nl: 'rené van beeck',
                    en: 'rené van beeck',
                    slug: 'rene-van-beeck'
                },
                {
                    nl: 'hans braber,\nhein de jong',
                    en: 'hans braber,\nhein de jong',
                    slug: 'braber-de-jong'
                },



            ]
        },
        {
            nl: 'theatermuziek',
            en: 'theater music',
            slug: 'theater-music',
            subMenuItems: [
                {
                    nl: 'you\'re the top',
                    en: 'you\'re the top',
                    slug: 'you-are-the-top'
                },
                {
                    nl: 'de negen levens van mathilde santing',
                    en: 'de negen levens van mathilde santing',
                    slug: 'de-negen-levens-van-mathilde-santing',
                }
            ]
        },
        {
            nl: 'andere activiteiten',
            en: 'other activities',
            slug: 'other-activities'
        },
        {
            nl: 'biografie',
            en: 'biography',
            slug: 'biography'
        },
        {
            nl: 'discografie',
            en: 'discography',
            slug: 'discography'
        },
        {
            nl: 'docent',
            en: 'teacher',
            slug: 'teacher'
        },
        {
            nl: 'composities',
            en: 'compositions',
            slug: 'compositions'
        },
        {
            nl: 'new horizons',
            en: 'new horizons',
            slug: 'new-horizons'
        },


    ],

    sidenavOpen: false
}
