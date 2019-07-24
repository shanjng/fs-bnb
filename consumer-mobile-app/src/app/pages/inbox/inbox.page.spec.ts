import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { inboxPage } from './inbox.page';

describe('inboxPage', () => {
  let component: inboxPage;
  let fixture: ComponentFixture<inboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ inboxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(inboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
