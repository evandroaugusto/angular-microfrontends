import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-box-host',
  template: '',
  styleUrls: ['./card-box-host.component.scss']
})
export class CardBoxHostComponent implements OnInit {

  constructor(public vcref: ViewContainerRef) { }

  async ngOnInit() {
    const component = await import('mfeHost/Components/CardBox');
    const componentRef = this.vcref.createComponent<{
      name: string,
      clicked: Observable<string>,
    }>(component.CardBoxComponent);

    // @Input()
    componentRef.instance.name = 'Evandro Oliveira';

    // @Output()
    componentRef.instance.clicked.subscribe(action => {
      console.log('CLICOU AQUI  ===>', action);
    });
  }

}
