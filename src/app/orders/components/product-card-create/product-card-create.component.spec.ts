import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardCreateComponent } from './product-card-create.component';

describe('ProducCardCreateComponent', () => {
  let component: ProductCardCreateComponent;
  let fixture: ComponentFixture<ProductCardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
