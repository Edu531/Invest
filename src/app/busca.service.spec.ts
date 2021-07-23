/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuscaService } from './busca.service';

describe('Service: Busca', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscaService]
    });
  });

  it('should ...', inject([BuscaService], (service: BuscaService) => {
    expect(service).toBeTruthy();
  }));
});
