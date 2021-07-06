import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWrComponent } from './navbar-wr.component';

describe('NavbarWrComponent', () => {
  let component: NavbarWrComponent;
  let fixture: ComponentFixture<NavbarWrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarWrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
