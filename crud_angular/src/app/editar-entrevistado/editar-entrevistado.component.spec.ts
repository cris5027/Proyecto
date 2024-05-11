import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEntrevistadoComponent } from './editar-entrevistado.component';

describe('EditarEntrevistadoComponent', () => {
  let component: EditarEntrevistadoComponent;
  let fixture: ComponentFixture<EditarEntrevistadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarEntrevistadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarEntrevistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
