import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusbcriptionsComponent } from './susbcriptions.component';

describe('SusbcriptionsComponent', () => {
  let component: SusbcriptionsComponent;
  let fixture: ComponentFixture<SusbcriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SusbcriptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SusbcriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
