import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEntrevistadosComponent } from './lista-entrevistados.component';

describe('ListaEntrevistadosComponent', () => {
  let component: ListaEntrevistadosComponent;
  let fixture: ComponentFixture<ListaEntrevistadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEntrevistadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaEntrevistadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
