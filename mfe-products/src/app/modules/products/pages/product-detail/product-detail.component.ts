import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsApi } from '../../api/products.api';
import { EnvVars } from 'src/app/core/services/env-vars.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product$: Observable<any>;
  products$: Observable<any>;

  constructor(private api: ProductsApi, private router: ActivatedRoute) {
    this.product$ = this.api.fetchProduct(this.router.snapshot.params['id']);
    this.products$ = this.api.fetchProducts();

    console.log('ENV=>', EnvVars.get('feature_flag_a'));
  }
}
