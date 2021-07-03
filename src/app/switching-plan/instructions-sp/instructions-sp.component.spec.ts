import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsSpComponent } from './instructions-sp.component';

describe('InstructionsSpComponent', () => {
  let component: InstructionsSpComponent;
  let fixture: ComponentFixture<InstructionsSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionsSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
