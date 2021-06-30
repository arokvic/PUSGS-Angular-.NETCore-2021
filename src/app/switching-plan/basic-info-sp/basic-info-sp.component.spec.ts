import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoSpComponent } from './basic-info-sp.component';

describe('BasicInfoSpComponent', () => {
  let component: BasicInfoSpComponent;
  let fixture: ComponentFixture<BasicInfoSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
