import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDistributorCommentComponent } from './order-distributor-comment.component';

describe('OrderDistributorCommentComponent', () => {
  let component: OrderDistributorCommentComponent;
  let fixture: ComponentFixture<OrderDistributorCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderDistributorCommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDistributorCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
