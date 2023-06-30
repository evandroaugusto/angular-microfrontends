import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsApi } from '../../api/products.api';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<any>;

  constructor(
    private api: ProductsApi,
    private router: ActivatedRoute
  ) { 
    this.product$ = this.api.fetchProduct(this.router.snapshot.params['id']);
  }

  ngOnInit() {  }
}
