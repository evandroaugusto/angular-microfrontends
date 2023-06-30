import { Component, Inject, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/feature/model/Product';
import { UserService  } from 'mfeCore/public-api';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product?: Product;
   
  constructor(@Inject(UserService) private userService: any,) {  }

  ngOnInit(): void {
  }

}
