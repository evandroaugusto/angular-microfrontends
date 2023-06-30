import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
    {
      path: 'users',
      loadChildren: () => {
        return import('./users/users.module').then(m => m.UsersModule)
      }
    },
    {
      path: 'settings',
      loadChildren: () => {
        return import('./settings/settings.module').then(m => m.SettingsModule)
      }
    }
  ])
  ]
})
export class BootstrapModule { 
  constructor(private router: Router) {
    console.log('THIS', this.router);
  }

   getRoutes() {
    return this.router;
   }
}

