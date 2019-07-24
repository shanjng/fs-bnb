
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { profilePage } from './profile.page';

describe('profilePage', () => {
  let component: profilePage;
  let fixture: ComponentFixture<profilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ profilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(profilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
