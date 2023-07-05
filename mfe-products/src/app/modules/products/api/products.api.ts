import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { Category } from '../model/Category';
import { ProductDTO } from './dto/Product.dto';
import { CategoryDTO } from './dto/Category.dto';
import { productDTOMapper, productsDTOMapper } from './mappers';

@Injectable({
  providedIn: 'root',
})
export class ProductsApi {
  constructor(private httpClient: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    return this.httpClient
      .get<ProductDTO[]>('https://fakestoreapi.com/products')
      .pipe(productsDTOMapper());
  }

  fetchProduct(productId: number): Observable<Product> {
    return this.httpClient
      .get<ProductDTO>(`https://fakestoreapi.com/products/${productId}`)
      .pipe(productDTOMapper());
  }

  fetchCategories(): Observable<Category[]> {
    return this.httpClient.get<CategoryDTO[]>(
      `https://fakestoreapi.com/products/categories`
    );
  }
}
