import { Injectable } from '@angular/core';
import { CartApi } from '../../api/cart.api';
import { ProductsApi } from '../../api/products.api';

@Injectable()
export class ProductsFacade {
  products$ = this.getProducts$();

  constructor(private productsApi: ProductsApi, private cartsApi: CartApi) {}

  // Streams
  private getProducts$() {
    return this.productsApi.fetchProducts();
  }
}
