import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.componet';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ]
})

export class ProductModule {}
