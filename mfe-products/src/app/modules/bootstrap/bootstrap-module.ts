import { NgModule } from '@angular/core';

import { BootstrapRouting } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  declarations: [BootstrapComponent],
  imports: [BootstrapRouting],
  providers: [],
})
export class BootstrapModule {}
