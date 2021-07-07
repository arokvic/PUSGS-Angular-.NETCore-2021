import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Incidents2Component } from './incidents2.component';

describe('Incidents2Component', () => {
  let component: Incidents2Component;
  let fixture: ComponentFixture<Incidents2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Incidents2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Incidents2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
