import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsIncident2Component } from './calls-incident2.component';

describe('CallsIncident2Component', () => {
  let component: CallsIncident2Component;
  let fixture: ComponentFixture<CallsIncident2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallsIncident2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsIncident2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
