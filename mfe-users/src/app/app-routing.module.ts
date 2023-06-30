import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapModule } from './modules/bootstrap.module';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => BootstrapModule
  },
  {
    path: '**',
    redirectTo: '/usuarios/users/consultar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
