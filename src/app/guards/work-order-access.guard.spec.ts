import { TestBed } from '@angular/core/testing';

import { WorkOrderAccessGuard } from './work-order-access.guard';

describe('WorkOrderAccessGuard', () => {
  let guard: WorkOrderAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WorkOrderAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
