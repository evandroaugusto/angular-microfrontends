import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  title: string = '';

  setTitle(title: string) {
    this.title = title;
  }
}
