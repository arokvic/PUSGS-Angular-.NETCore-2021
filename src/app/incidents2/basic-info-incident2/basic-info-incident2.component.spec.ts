import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoIncident2Component } from './basic-info-incident2.component';

describe('BasicInfoIncident2Component', () => {
  let component: BasicInfoIncident2Component;
  let fixture: ComponentFixture<BasicInfoIncident2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoIncident2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoIncident2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
