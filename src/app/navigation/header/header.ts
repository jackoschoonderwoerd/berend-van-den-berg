import { Component, inject, computed } from '@angular/core';
import { NavigationStore } from '../navigation-store/navigation-store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Signal } from '@angular/core';
import { MenuItem } from '../navigation-store/navigation-slice';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import { UserInterfaceStore } from '../../shared/user-interface-store/user-inerface-store';


@Component({
    selector: 'app-header',
    imports: [
        MatToolbarModule,
        MatListModule,
        RouterModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule
    ],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {

    readonly uiStore = inject(UserInterfaceStore)
    readonly navigationStore = inject(NavigationStore);

    private readonly breakpointObserver = inject(BreakpointObserver);

    // readonly isMobile = toSignal(
    //     this.breakpointObserver.observe('(max-width: 1700px)')
    //         .pipe(map(result => result.matches)),
    //     { initialValue: false }
    // );

    private readonly router = inject(Router);

    readonly activeRoute = toSignal(
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.router.url),
            startWith(this.router.url)
        ),
        { initialValue: this.router.url }
    );

    readonly navigationColor = computed(() => {
        console.log(this.activeRoute())
        switch (this.activeRoute()) {
            case '/home':
                return 'color:white';
            case '/reviews':
                return 'color:white'

            case '/gallery':
                return 'color:white';

            case '/biography':
                return 'color:#8f58ac';
            case '/bands/trio-njq':
                return 'color:white';
            case '/bands/the-octet':
                return 'color:white';
            case '/bands/astrid-seriese':
                return 'color:white';
            default:
                return 'color:var(--p-black)';
        }
    });
}
