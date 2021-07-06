import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfWrComponent } from './basic-inf-wr.component';

describe('BasicInfWrComponent', () => {
  let component: BasicInfWrComponent;
  let fixture: ComponentFixture<BasicInfWrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfWrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfWrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
