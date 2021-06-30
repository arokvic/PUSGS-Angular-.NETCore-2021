import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpComponent } from './new-sp.component';

describe('NewSpComponent', () => {
  let component: NewSpComponent;
  let fixture: ComponentFixture<NewSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
