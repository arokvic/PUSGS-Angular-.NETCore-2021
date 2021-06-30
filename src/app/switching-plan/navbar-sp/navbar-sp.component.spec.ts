import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSpComponent } from './navbar-sp.component';

describe('NavbarSpComponent', () => {
  let component: NavbarSpComponent;
  let fixture: ComponentFixture<NavbarSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
