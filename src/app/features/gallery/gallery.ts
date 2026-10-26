import { Component, inject } from '@angular/core';
import { GalleryStore } from './gallery-store/gallery-store';
import {

    AfterViewInit,
    OnDestroy,
    ElementRef,
    viewChild
} from '@angular/core';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import { GalleryImage } from './gallery-store/gallery-slice';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-gallery',
    imports: [MatIconModule],
    templateUrl: './gallery.html',
    styleUrl: './gallery.scss',
})
export class Gallery implements OnDestroy {
    galleryStore = inject(GalleryStore)

    readonly gallery = viewChild.required<ElementRef<HTMLElement>>('gallery');

    private lightbox?: PhotoSwipeLightbox;

    constructor() {
        this.lightbox = new PhotoSwipeLightbox({
            dataSource: this.galleryStore.galleryImages().map(image => ({
                src: image.src,
                width: image.width,
                height: image.height,
                alt: image.alt
            })),
            pswpModule: () => import('photoswipe')
        });

        this.lightbox.init();
    }

    openGallery() {
        this.lightbox?.loadAndOpen(0);
    }

    ngOnDestroy() {
        this.lightbox?.destroy();
    }

    // ngAfterViewInit(): void {
    //     this.lightbox = new PhotoSwipeLightbox({
    //         gallery: this.gallery().nativeElement,
    //         children: 'a',
    //         pswpModule: () => import('photoswipe')
    //     });

    //     this.lightbox.init();
    // }

    // ngOnDestroy(): void {
    //     this.lightbox?.destroy();
    // }
}
