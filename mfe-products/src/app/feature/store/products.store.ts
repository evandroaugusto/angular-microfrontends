import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type ProductsState = {
  conteudoA: string,
  conteudoB: string
};

const INITIAL_STATE: ProductsState = {
  conteudoA: '',
  conteudoB: '',
};

@Injectable()
export class ProductsStore {
  private store: BehaviorSubject<ProductsState>;
  state$: Observable<ProductsState>;

  constructor() {
    this.store = new BehaviorSubject(INITIAL_STATE);
    this.state$ = this.store.asObservable();
  }

  setConteudoA(conteudoA: string) {
    this.setState({ ...this.state, conteudoA });
  }

  setConteudoB(conteudoB: string) {
    this.setState({ ...this.state, conteudoB });
  }


  get state(): ProductsState {
    return this.store.getValue();
  }

  private setState(newState: ProductsState) {
    this.store.next(newState);
  }
}
