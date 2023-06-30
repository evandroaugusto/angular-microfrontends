import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductItemComponent } from './pages/product-list/product-item/product-item.component';
import { ProductsComponent } from './products.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BoardCardComponent } from './components/board-card/board-card.component';
import { PaginaExemploComponent } from './pages/pagina-exemplo/pagina-exemplo.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ProductsComponent,
    ProductEditComponent,
    BoardCardComponent,
    PaginaExemploComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ ]
})
export class ProductsModule { }
