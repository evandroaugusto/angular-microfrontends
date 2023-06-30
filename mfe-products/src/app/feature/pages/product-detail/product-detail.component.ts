import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsApi } from '../../api/products.api';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<any>;
  products$: Observable<any>;

  constructor(
    private api: ProductsApi,
    private router: ActivatedRoute
  ) { 
    this.product$ = this.api.fetchProduct(this.router.snapshot.params['id']);
    this.products$ = this.api.fetchProducts();
  }

  ngOnInit(): void {
  }

}
