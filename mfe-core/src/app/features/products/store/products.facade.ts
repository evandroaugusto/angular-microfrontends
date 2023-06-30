import { Injectable } from '@angular/core';
import { distinctUntilChanged, filter, map } from 'rxjs';
import { ProductsStore } from './products.store';

@Injectable()
export class ProductsFacade {
  state = this.store.state;

  conteudoA$ = this.store.state$.pipe(
    map((store) => store.conteudoA),
    filter((regiao) => regiao !== null),
    distinctUntilChanged()
  );

  conteudoB$ = this.store.state$.pipe(
    map((store) => store.conteudoB),
    filter((regiao) => regiao !== null),
    distinctUntilChanged()
  );

  constructor(
    private store: ProductsStore,
  ) {}
}
