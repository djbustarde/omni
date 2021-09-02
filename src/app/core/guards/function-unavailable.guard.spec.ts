import { TestBed } from '@angular/core/testing';

import { FunctionUnavailableGuard } from './function-unavailable.guard';

describe('FunctionUnavailableGuard', () => {
  let guard: FunctionUnavailableGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FunctionUnavailableGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
