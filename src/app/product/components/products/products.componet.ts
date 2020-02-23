import { Component, OnInit } from '@angular/core';

import { Product } from '../../../product.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['products.component.scss']
})

export class ProductsComponent implements OnInit {

    products: Product[] = [
        {
            id: '1',
            image: 'assets/images/bitcoin.jpg',
            title: 'arroz',
            price: 10,
            description: 'x'
          },
    ];
    constructor() {}

    ngOnInit() {

    }

    clickProduct(id: number) {
        console.log('product');
        console.log(id);
    }
}

