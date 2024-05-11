import { TestBed } from '@angular/core/testing';

import { EntrevistadoService } from './entrevistado.service';

describe('EntrevistadoService', () => {
  let service: EntrevistadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrevistadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
