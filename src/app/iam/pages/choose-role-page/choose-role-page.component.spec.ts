import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRolePageComponent } from './choose-role-page.component';

describe('ChooseRolePageComponent', () => {
  let component: ChooseRolePageComponent;
  let fixture: ComponentFixture<ChooseRolePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseRolePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseRolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
