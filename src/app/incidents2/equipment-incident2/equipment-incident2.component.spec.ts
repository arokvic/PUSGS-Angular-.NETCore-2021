import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentIncident2Component } from './equipment-incident2.component';

describe('EquipmentIncident2Component', () => {
  let component: EquipmentIncident2Component;
  let fixture: ComponentFixture<EquipmentIncident2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentIncident2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentIncident2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
