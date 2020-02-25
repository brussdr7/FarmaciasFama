import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/models/product.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['products.component.scss']
})

export class ProductsComponent implements OnInit {

    products: Product[] = [
        {
            id: '1',
            image: 'assets/images/Aspirina.jpg',
            title: 'aspirinas',
            price: 10,
            description: 'x'
          },
          {
            id: '2',
            image: 'assets/images/parasetamol.jpg',
            title: 'parasetamol',
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

