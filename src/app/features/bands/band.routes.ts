import { Routes } from '@angular/router';

export const BAND_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./bands').then(c => c.Bands),

        children: [
            {
                path: '',
                redirectTo: 'the-octet',
                pathMatch: 'full'
            },
            {
                path: 'the-octet',
                loadComponent: () =>
                    import('./band-pages/the-octet/the-octet')
                        .then(c => c.TheOctet)
            },
            {
                path: 'trio-njq',
                loadComponent: () =>
                    import('./band-pages/trio-njq/trio-njq')
                        .then(c => c.TrioNjq)
            },
            {
                path: 'astrid-seriese',
                loadComponent: () =>
                    import('./band-pages/astrid-seriese/astrid-seriese')
                        .then(c => c.AstridSeriese)
            }
        ]
    }
];
