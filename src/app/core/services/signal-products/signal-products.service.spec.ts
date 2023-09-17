import { TestBed } from '@angular/core/testing';

import { SignalProductsService } from './signal-products.service';

describe('SignalProductsService', () => {
  let service: SignalProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
