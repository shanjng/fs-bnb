import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { existingPage } from './existing.page';

describe('existingPage', () => {
  let component: existingPage;
  let fixture: ComponentFixture<existingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [existingPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(existingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
