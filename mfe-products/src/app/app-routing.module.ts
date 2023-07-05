import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderModule, FooterModule } from 'mfeCore/public-api';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        exposedModule: './public-api',
        remoteEntry: 'http://localhost:4000/remoteEntry.js',
      }).then((m) => m['DashboardModule']),
  },

  //
  // LAYOUT
  //
  {
    path: '',
    outlet: 'header',
    loadChildren: () => HeaderModule,
  },

  {
    path: '',
    outlet: 'footer',
    loadChildren: () => FooterModule,
  },

  // Redirects
  {
    path: '**',
    redirectTo: 'produtos/consultar',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
