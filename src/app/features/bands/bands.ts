import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BandsNavigation } from './bands-navigation/bands-navigation';
import { UserInterfaceStore } from '../../shared/user-interface-store/user-inerface-store';

@Component({
    selector: 'app-bands',
    imports: [
        RouterOutlet,
        BandsNavigation
    ],
    templateUrl: './bands.html',
    styleUrl: './bands.scss'
})
export class Bands {
    uiStore = inject(UserInterfaceStore)
}
