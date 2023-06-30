import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MfeConfig from '../assets/mf.manifest.json';

import { HeaderModule, FooterModule } from 'mfeCore/public-api';

const mfeRoutes = (): Routes => {
  const routes: Routes = MfeConfig.map(mfe => {
    return {
      path: mfe.path,
      loadChildren: () => loadRemoteModule({
        type: 'module',
        exposedModule: mfe.exposedModule,
        remoteEntry: mfe.remoteEntry
      }).then(m => m[mfe.ngModuleName])
    }
  });

  return routes;
}

const routes: Routes = [
  ...mfeRoutes(),

  //
  // LAYOUT
  //
  {
    path: '',
    outlet: 'header',
    loadChildren: () => HeaderModule
  },

  {
    path: '',
    outlet: 'footer',
    loadChildren: () => FooterModule
  },


  //
  // redirects
  //
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor() { }
}
