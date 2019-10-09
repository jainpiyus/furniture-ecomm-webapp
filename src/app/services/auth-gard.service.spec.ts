import { TestBed } from '@angular/core/testing';

import { AuthGardService } from './auth-gard.service';

describe('AuthGardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGardService = TestBed.get(AuthGardService);
    expect(service).toBeTruthy();
  });
});
