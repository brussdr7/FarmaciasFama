import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

    images: string[] = [
        'assets/images/tienda.png',
        'assets/images/cereales.jpeg',
        'assets/images/lacteos.jpeg'
    ];

    constructor() {}

    ngOnInit() {}
}



