import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tripsPage } from './trips.page';

describe('tripsPage', () => {
  let component: tripsPage;
  let fixture: ComponentFixture<tripsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [tripsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
