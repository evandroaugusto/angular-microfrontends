import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature/header',
    loadChildren: () => import('./core/layout/header/header.module').then(
      m => m.HeaderModule
    )
  },
  {
    path: 'feature/footer',
    loadChildren: () => import('./core/layout/footer/footer.module').then(
      m => m.FooterModule
    )
  },
  {
    path: 'produtos',
    loadChildren: () => import('./feature/products.module').then(
      m => m.ProductsModule
    )
  },
  {
    path: '**',
    redirectTo: 'produtos/consultar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
