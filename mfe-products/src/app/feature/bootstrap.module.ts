import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BootstrapConfig } from './bootstrap-config';
//import { ProductsModule as ProductsModuleBootstrap } from './products.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      loadChildren: () => {
        return import('./products.module').then(m => m.ProductsModule)
      }
    }])
  ]
})
export class ProductsModule { 
  constructor() { }

  static get dashboardConfig() {
    return BootstrapConfig;
  }
}

