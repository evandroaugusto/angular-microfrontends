import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './layout/header/header.module';
import { FooterModule } from './layout/footer/footer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ]
})
export class CoreModule { }
