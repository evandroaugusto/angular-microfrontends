import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MFE_MODULES_TOKEN } from './tokens/mfe-module-ref.token';
import { initApp } from './app-init';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initApp,
    //   deps:[MFE_MODULES_TOKEN],
    //   multi: true
    //  }
  ]
})
export class CoreModule { }
