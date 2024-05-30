import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ibmGuard } from './ibm.guard';

describe('ibmGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ibmGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
