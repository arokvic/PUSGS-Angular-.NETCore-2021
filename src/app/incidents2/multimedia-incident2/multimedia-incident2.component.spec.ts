import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaIncident2Component } from './multimedia-incident2.component';

describe('MultimediaIncident2Component', () => {
  let component: MultimediaIncident2Component;
  let fixture: ComponentFixture<MultimediaIncident2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaIncident2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaIncident2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
