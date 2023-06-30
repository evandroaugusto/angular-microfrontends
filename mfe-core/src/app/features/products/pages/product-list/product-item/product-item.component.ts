import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../model/Product';
import { ProductsService } from '../../../products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product;

  constructor(private productsService: ProductsService) {   }

  ngOnInit(): void {
  }

}
