import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'consultar',
    component: ProductListComponent,
  },
  {
    path: 'detalhes/:id',
    component: ProductDetailComponent,
  },
  {
    path: '**',
    redirectTo: '/produtos/consultar',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
