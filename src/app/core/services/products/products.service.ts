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
    ];

    constructor() {}

    getAllProducts() {
        return this.products;
    }

    getProduct(id: string) {
        return this.products.find(item => id === item.id);
    }
}

