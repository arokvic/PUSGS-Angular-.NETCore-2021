import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionIncident2Component } from './resolution-incident2.component';

describe('ResolutionIncident2Component', () => {
  let component: ResolutionIncident2Component;
  let fixture: ComponentFixture<ResolutionIncident2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionIncident2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionIncident2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
