import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ProductsFacade } from './products-facade';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsFacade]
})
export class ProductListComponent implements OnInit, OnDestroy {
  products$ = this.facade.products$;

  constructor(
    private facade: ProductsFacade,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void { 
    this.productsService.setTitle('PRODUTOS LISTA');
  }

  ngOnDestroy() { }

}