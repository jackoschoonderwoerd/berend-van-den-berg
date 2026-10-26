import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'

import { initialNavigationSlice } from './navigation-slice';
import { computed } from '@angular/core';


export const NavigationStore = signalStore(
    { providedIn: 'root' },
    withState(initialNavigationSlice),

    withMethods((store) => {

        return {
            openSidenav() {
                patchState(store, { sidenavOpen: true })
            },
            closeSidenav() {
                patchState(store, { sidenavOpen: false })

            },
            setSidenavOpen(open: boolean) {
                patchState(store, { sidenavOpen: open });
            }

        }
    }),
    withComputed(store => ({
        bands: computed(() =>
            store.menuItems()
                .find(item => item.slug === 'bands')
                ?.subMenuItems ?? []
        )
    })),

)
