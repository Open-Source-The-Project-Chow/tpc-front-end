import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBuyerPageComponent } from './sign-up-buyer-page.component';

describe('SignUpBuyerPageComponent', () => {
  let component: SignUpBuyerPageComponent;
  let fixture: ComponentFixture<SignUpBuyerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpBuyerPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpBuyerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
