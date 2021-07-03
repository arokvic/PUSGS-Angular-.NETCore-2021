import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSpComponent } from './equipment-sp.component';

describe('EquipmentSpComponent', () => {
  let component: EquipmentSpComponent;
  let fixture: ComponentFixture<EquipmentSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
