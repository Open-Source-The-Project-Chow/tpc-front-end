import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDistributorPageComponent } from './order-distributor-page.component';

describe('OrderDistributorPageComponent', () => {
  let component: OrderDistributorPageComponent;
  let fixture: ComponentFixture<OrderDistributorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDistributorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDistributorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
