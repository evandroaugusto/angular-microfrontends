import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MFE_MODULES_TOKEN } from './core/tokens/mfe-module-ref.token';
import { initApp } from './core/app-init';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initApp,
      deps:[MFE_MODULES_TOKEN],
      multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
