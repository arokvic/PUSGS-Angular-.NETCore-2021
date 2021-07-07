import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewIncident2Component } from './crew-incident2.component';

describe('CrewIncident2Component', () => {
  let component: CrewIncident2Component;
  let fixture: ComponentFixture<CrewIncident2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewIncident2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewIncident2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
