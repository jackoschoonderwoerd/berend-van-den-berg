import { Component, inject } from '@angular/core';
import { NavigationStore } from '../../../navigation/navigation-store/navigation-store';
import { RouterModule } from '@angular/router';
import { MatListModule, MatNavList } from '@angular/material/list';

@Component({
    selector: 'app-bands-navigation',
    imports: [RouterModule, MatListModule],
    templateUrl: './bands-navigation.html',
    styleUrl: './bands-navigation.scss',
})
export class BandsNavigation {
    readonly navigationStore = inject(NavigationStore)
}
