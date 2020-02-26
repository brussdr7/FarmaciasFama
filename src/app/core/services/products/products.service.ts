import { Injectable } from '@angular/core';

import { Product } from '../../models/product.model';

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    products: Product[] = [
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
        }
    ];

    constructor() {}

    getAllProducts() {
        return this.products;
    }

    getProduct(id: string) {
        return this.products.find(item => id === item.id);
    }
}

