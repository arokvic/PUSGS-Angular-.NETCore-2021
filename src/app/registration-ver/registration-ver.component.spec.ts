import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationVerComponent } from './registration-ver.component';

describe('RegistrationVerComponent', () => {
  let component: RegistrationVerComponent;
  let fixture: ComponentFixture<RegistrationVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationVerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
