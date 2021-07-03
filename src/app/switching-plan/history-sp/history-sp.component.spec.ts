import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySpComponent } from './history-sp.component';

describe('HistorySpComponent', () => {
  let component: HistorySpComponent;
  let fixture: ComponentFixture<HistorySpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorySpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorySpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
