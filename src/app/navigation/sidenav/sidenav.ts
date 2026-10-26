import { Component, inject, Signal } from '@angular/core';
import { NavigationStore } from '../navigation-store/navigation-store';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuItem } from '../navigation-store/navigation-slice';
import { RouterLink, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-sidenav',
    imports: [
        MatIconModule,
        MatListModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        RouterLink
    ],
    templateUrl: './sidenav.html',
    styleUrl: './sidenav.scss',
})
export class Sidenav {
    navigationStore = inject(NavigationStore)



    onCLose() {
        this.navigationStore.closeSidenav();
        console.log('close')
    }
}
