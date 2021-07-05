import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSafetyDocumentComponent } from './new-safety-document.component';

describe('NewSafetyDocumentComponent', () => {
  let component: NewSafetyDocumentComponent;
  let fixture: ComponentFixture<NewSafetyDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSafetyDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafetyDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
