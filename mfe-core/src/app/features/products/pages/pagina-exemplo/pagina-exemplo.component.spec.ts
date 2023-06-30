import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExemploComponent } from './pagina-exemplo.component';

describe('PaginaExemploComponent', () => {
  let component: PaginaExemploComponent;
  let fixture: ComponentFixture<PaginaExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaExemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
