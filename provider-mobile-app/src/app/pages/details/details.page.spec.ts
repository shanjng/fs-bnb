import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { detailsPage } from './details.page';

describe('detailsPage', () => {
  let component: detailsPage;
  let fixture: ComponentFixture<detailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ detailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(detailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
