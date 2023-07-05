import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { BootstrapComponent } from './bootstrap.component';
import { EnvVars } from 'src/app/core/services/env-vars.service';

import { environment } from 'src/environments/environment';

type MfeModule = {
  title: string;
};

// ------------------------------------------------------------------

const routes: Routes = [
  {
    path: '',
    component: BootstrapComponent,
    children: [
      {
        path: '',
        loadChildren: async () => {
          await EnvVars.setup(`assets/env.${environment.name}.js`);
          return import('../products/products.module').then(
            (m) => m.ProductsModule
          );
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BootstrapComponent,
        children: routes,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class BootstrapRouting implements MfeModule {
  title = 'Módulo produtos';
}
