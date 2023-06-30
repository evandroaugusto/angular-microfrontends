import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsApi } from '../../api/products.api';

import { combineLatest, delay, filter, map, merge, NEVER, of, ReplaySubject, startWith, Subject, switchMap, tap } from 'rxjs';

// Api Formulário
// Router
// HttpClient (get, post, put)

@Component({
  selector: 'app-pagina-exemplo',
  templateUrl: './pagina-exemplo.component.html',
  styleUrls: ['./pagina-exemplo.component.scss']
})
export class PaginaExemploComponent implements OnInit {
  produtos$ = this.api.fetchProducts();
  produtos = 'valor';
  

  produtosTop3$ = this.produtos$.pipe(
    map(produtos => produtos.slice(0, 3)),
  );
  
  produtoDetalhe$ = this.produtosTop3$.pipe(
    switchMap(produtos => this.api.fetchProduct(produtos[0].id!)),
  );

  private categorias$ = this.api.fetchCategories()
  private streamVazio$ = this.produtosTop3$.pipe(switchMap(() => NEVER));


  subject$ = new Subject();


  vm$ = combineLatest({
    nome: this.categorias$
  })

  constructor(private api: ProductsApi, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const nome = 'evandro';

    // merge(
    //   this.produtosTop3$.pipe(switchMap(() => NEVER)),
    //   this.produtoDetalhe$
    // ).subscribe(dados => {
    //   console.log('Dados', dados);
    // });



  }




}
