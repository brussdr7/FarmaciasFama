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
          {
            id: '3',
            image: 'assets/images/ventolin.jpg',
            title: 'ventolin',
            price: 10,
            description: 'x'
          },
          {
            id: '4',
            image: 'assets/images/sintrom.jpg',
            title: 'sintrom',
            price: 10,
            description: 'x'
          },
          {
            id: '5',
            image: 'assets/images/eutirox.jpg',
            title: 'eutirox',
            price: 10,
            description: 'x'
          },
          {
            id: '6',
            image: 'assets/images/adiro.jpeg',
            title: 'adiro',
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

