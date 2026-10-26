import { Component, ElementRef, inject, OnInit, Signal, signal, viewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './navigation/header/header';
import { Footer } from './navigation/footer/footer';
import { Sidenav } from './navigation/sidenav/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationStore } from './navigation/navigation-store/navigation-store';
import { filter } from 'rxjs';
import { MatSidenavContent } from '@angular/material/sidenav';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UpdateService } from './services/update.service';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        Header,
        Footer,
        MatSidenavModule,
        Sidenav,

    ],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    protected readonly title = signal('berend-van-den-berg');

    readonly navigationStore = inject(NavigationStore)

    readonly headerHidden = signal(false);

    private lastScrollTop = 0;

    private router = inject(Router);

    readonly sidenavContent = viewChild(MatSidenavContent);

    // private updateService = inject(UpdateService);

    main = viewChild<ElementRef<HTMLElement>>('main');

    constructor() {
        inject(UpdateService);
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntilDestroyed()
            )
            .subscribe(() => {
                this.sidenavContent()?.getElementRef()
                    .nativeElement.scrollTo({
                        top: 0,
                        behavior: 'instant'
                    });

                this.headerHidden.set(false);
                this.lastScrollTop = 0;
            });
    }



    onScroll(event: Event) {
        const element = event.target as HTMLElement;
        const currentScrollTop = element.scrollTop;

        if (Math.abs(currentScrollTop - this.lastScrollTop) < 5) {
            return;
        }

        this.headerHidden.set(
            currentScrollTop > this.lastScrollTop &&
            currentScrollTop > 80
        );

        this.lastScrollTop = currentScrollTop;
    }
    // onScroll(element: HTMLElement) {
    //     const currentScrollTop = element.scrollTop;

    //     if (Math.abs(currentScrollTop - this.lastScrollTop) < 5) {
    //         return;
    //     }

    //     this.headerHidden.set(
    //         currentScrollTop > this.lastScrollTop &&
    //         currentScrollTop > 80
    //     );

    //     this.lastScrollTop = currentScrollTop;
    // }

    // onScroll(element: HTMLElement) {

    //     const currentScrollTop = element.scrollTop;

    //     if (Math.abs(currentScrollTop - this.lastScrollTop) < 5) {
    //         return;
    //     }

    //     this.headerHidden.set(
    //         currentScrollTop > this.lastScrollTop && currentScrollTop > 80
    //     );

    //     this.lastScrollTop = currentScrollTop;
    // }

}
