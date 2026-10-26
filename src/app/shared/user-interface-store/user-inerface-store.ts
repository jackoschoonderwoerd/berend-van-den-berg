import {
    patchState,
    signalStore,
    withMethods,
    withState,
    withHooks
} from '@ngrx/signals';

import { effect, inject } from '@angular/core';

import {
    Language,
    initialUserInterfaceSlice
} from './user-interface-slice';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, distinctUntilChanged } from 'rxjs';

export const UserInterfaceStore = signalStore(
    { providedIn: 'root' },

    withState(initialUserInterfaceSlice),

    withMethods(store => ({
        setLanguage(language: Language) {
            patchState(store, {
                activeLanguage: language
            });
        },

        toggleLanguage() {
            patchState(store, {
                activeLanguage:
                    store.activeLanguage() === 'nl' ? 'en' : 'nl'
            });
        }

    })),

    withHooks(store => ({
        onInit() {
            // Restore saved language
            const savedLanguage = localStorage.getItem('language');

            if (savedLanguage === 'nl' || savedLanguage === 'en') {
                patchState(store, {
                    activeLanguage: savedLanguage
                });
            }

            // Persist language changes
            effect(() => {
                localStorage.setItem(
                    'language',
                    store.activeLanguage()
                );
            });

            const breakpointObserver = inject(BreakpointObserver);

            breakpointObserver
                .observe('(max-width: 1700px)')
                .pipe(
                    map(result => result.matches),
                    distinctUntilChanged()
                )
                .subscribe(isMobile => {
                    patchState(store, { isMobile });
                });

            breakpointObserver
                .observe('(max-width: 800px)')
                .pipe(
                    map(result => result.matches),
                    distinctUntilChanged()
                )
                .subscribe(max800 => {
                    patchState(store, { max800 });
                });
        }
    }))
);
