import { TestBed } from '@angular/core/testing';

import { OrderDService } from './order-d.service';

describe('OrderDService', () => {
  let service: OrderDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
