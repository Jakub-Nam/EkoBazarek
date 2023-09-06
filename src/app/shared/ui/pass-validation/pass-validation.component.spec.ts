import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassValidationComponent } from './pass-validation.component';

describe('PassValidationComponent', () => {
  let component: PassValidationComponent;
  let fixture: ComponentFixture<PassValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassValidationComponent]
    });
    fixture = TestBed.createComponent(PassValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
