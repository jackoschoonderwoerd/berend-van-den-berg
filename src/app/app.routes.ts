import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', loadComponent: () => import('./features/home/home')
            .then(c => c.Home)
    },
    {
        path: 'reviews', loadComponent: () => import('./features/reviews/reviews')
            .then(c => c.Reviews)
    },
    {
        path: 'gallery', loadComponent: () => import('./features/gallery/gallery')
            .then(c => c.Gallery)
    },
    {
        path: 'bands',
        loadChildren: () =>
            import('./features/bands/band.routes')
                .then(m => m.BAND_ROUTES)
    },
    {
        path: '**', redirectTo: 'home'
    }
];

