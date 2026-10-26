import { patchState, signalStore, withMethods, withState } from '@ngrx/signals'

import { initialGallerySlice } from './gallery-slice';


export const GalleryStore = signalStore(
    { providedIn: 'root' },
    withState(initialGallerySlice),
)
