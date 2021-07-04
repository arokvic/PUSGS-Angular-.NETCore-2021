import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarIncidentComponent } from './navbar-incident.component';

describe('NavbarIncidentComponent', () => {
  let component: NavbarIncidentComponent;
  let fixture: ComponentFixture<NavbarIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
