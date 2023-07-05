import {
  Component,
  inject,
  Inject,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ProductsFacade } from './products-facade.';
import { UserService } from 'mfeCore/public-api';
import { map, tap } from 'rxjs';

//import { LoremIpsumComponent } from 'mfeCore/component/lorem-ipsum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductsFacade, UserService],
})
export class ProductListComponent implements OnInit {
  products$ = this.facade.products$.pipe(
    map((products) => products.slice(0, 4))
  );

  favoriteProducts$ = this.facade.products$.pipe(
    map((products) => products.slice(4, 8))
  );

  constructor(private facade: ProductsFacade) {}

  ngOnInit(): void {}
}
