import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoViewComponent } from './product-info-view.component';

describe('ProductInfoViewComponent', () => {
  let component: ProductInfoViewComponent;
  let fixture: ComponentFixture<ProductInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductInfoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
