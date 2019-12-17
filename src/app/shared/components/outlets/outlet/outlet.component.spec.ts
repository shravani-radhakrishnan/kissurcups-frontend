import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletComponent } from './outlet.component';

describe('OutletComponent', () => {
  let component: OutletComponent;
  let fixture: ComponentFixture<OutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
