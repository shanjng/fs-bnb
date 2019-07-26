import { TestBed } from '@angular/core/testing';

import { listingService } from './listing.service';

describe('listingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: listingService = TestBed.get(listingService);
    expect(service).toBeTruthy();
  });
});
