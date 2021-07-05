import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDocumentsPageComponent } from './safety-documents-page.component';

describe('SafetyDocumentsPageComponent', () => {
  let component: SafetyDocumentsPageComponent;
  let fixture: ComponentFixture<SafetyDocumentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDocumentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDocumentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
