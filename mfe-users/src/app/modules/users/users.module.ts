import { Compiler, ComponentRef, createNgModuleRef, NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersApi } from './api/users.api';
import { UsersRoutingModule } from './users-routing.module';
//import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import config from './config';

// mfe
// import { CardBoxHostComponent } from './components/card-box-host/card-box-host.component';
// import { UiComponentsComponent, UiComponentsModule, UiComponentsService } from 'mfeHost/UiLib';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    //CardBoxHostComponent,
    //UiComponentsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    //SweetAlert2Module.forRoot(),
    //UiComponentsModule,
  ],
  providers: [ 
    UsersApi,
    // {
    //   provide: 'uiService',
    //   useFactory: () => new UiComponentsService(),
    //   deps: []
    // } 
  ]
})
export class UsersModule { 
  constructor() { 
    // console.log('Component', UiComponentsComponent);
    // console.log('Module', UiComponentsModule);
    // console.log('Service', UiComponentsService);
  }
}
