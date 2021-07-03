import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaSpComponent } from './multimedia-sp.component';

describe('MultimediaSpComponent', () => {
  let component: MultimediaSpComponent;
  let fixture: ComponentFixture<MultimediaSpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaSpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
