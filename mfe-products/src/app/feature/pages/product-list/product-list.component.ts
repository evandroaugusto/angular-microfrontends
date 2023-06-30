import { Component, inject, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { ProductsFacade } from './products-facade.';
import { UserService  } from 'mfeCore/public-api';

//import { LoremIpsumComponent } from 'mfeCore/component/lorem-ipsum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsFacade, UserService]
})
export class ProductListComponent implements OnInit {
  products$ = this.facade.products$;
  //mfeComponent: any = LoremIpsumComponent;

  constructor(
    private facade: ProductsFacade
  ) { 
  }

  ngOnInit(): void { }

}
