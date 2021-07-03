import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInstructionSpComponent } from './create-instruction-sp.component';

describe('CreateInstructionSpComponent', () => {
  let component: CreateInstructionSpComponent;
  let fixture: ComponentFixture<CreateInstructionSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInstructionSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInstructionSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
