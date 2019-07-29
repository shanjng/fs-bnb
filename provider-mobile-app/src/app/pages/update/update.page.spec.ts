import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { updatePage } from './update.page';

describe('updatePage', () => {
  let component: updatePage;
  let fixture: ComponentFixture<updatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [updatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(updatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
