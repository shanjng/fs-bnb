import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { newPage } from './new.page';

describe('newPage', () => {
  let component: newPage;
  let fixture: ComponentFixture<newPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [newPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(newPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
