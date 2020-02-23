import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './components/products/products.componet';
import { ProductModule } from './product.module';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule {}



