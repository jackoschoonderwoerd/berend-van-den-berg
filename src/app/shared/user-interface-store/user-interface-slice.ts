export type Language = 'nl' | 'en';

export interface UserInterfaceSlice {
    activeLanguage: Language;
    isMobile: boolean;
    max800: boolean;
}

export const initialUserInterfaceSlice: UserInterfaceSlice = {
    activeLanguage: 'nl',
    isMobile: false,
    max800: false
};
