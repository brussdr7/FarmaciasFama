import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.componet';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        MaterialModule,
        SharedModule
    ]
})

export class ProductModule {}
