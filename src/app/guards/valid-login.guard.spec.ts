import { TestBed } from '@angular/core/testing';

import { ValidLoginGuard } from './valid-login.guard';

describe('ValidLoginGuard', () => {
  let guard: ValidLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
