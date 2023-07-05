import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./bootstrap.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BootstrapComponent {}
