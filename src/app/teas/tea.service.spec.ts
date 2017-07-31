import { TestBed, inject } from '@angular/core/testing';

import { TeaService } from './tea.service';

describe('TeaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeaService]
    });
  });

  it('should be created', inject([TeaService], (service: TeaService) => {
    expect(service).toBeTruthy();
  }));
});
