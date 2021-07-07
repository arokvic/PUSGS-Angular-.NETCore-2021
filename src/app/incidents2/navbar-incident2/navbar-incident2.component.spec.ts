import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIncident2Component } from './navbar-incident2.component';

describe('NavbarIncident2Component', () => {
  let component: NavbarIncident2Component;
  let fixture: ComponentFixture<NavbarIncident2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarIncident2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarIncident2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
