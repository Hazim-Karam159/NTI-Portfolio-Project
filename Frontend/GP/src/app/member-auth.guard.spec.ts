import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { memberAuthGuard } from './member-auth.guard';

describe('memberAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => memberAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
