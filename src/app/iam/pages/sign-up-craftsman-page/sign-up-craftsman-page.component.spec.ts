import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpCraftsmanPageComponent } from './sign-up-craftsman-page.component';

describe('SignUpCraftsmanPageComponent', () => {
  let component: SignUpCraftsmanPageComponent;
  let fixture: ComponentFixture<SignUpCraftsmanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpCraftsmanPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpCraftsmanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
