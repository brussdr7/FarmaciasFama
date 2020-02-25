import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

    images: string[] = [
        'assets/images/google-maps1.jpg',
        'assets/images/farmacia_swiper.jpg',
        'assets/images/farma-online.jpg'
    ];

    constructor() {}

    ngOnInit() {}
}



