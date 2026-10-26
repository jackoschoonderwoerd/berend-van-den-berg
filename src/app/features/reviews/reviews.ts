import { Component, inject } from '@angular/core';
import { UserInterfaceStore } from '../../shared/user-interface-store/user-inerface-store';

@Component({
    selector: 'app-reviews',
    imports: [],
    templateUrl: './reviews.html',
    styleUrl: './reviews.scss',
})
export class Reviews {
    uiStore = inject(UserInterfaceStore)
}
