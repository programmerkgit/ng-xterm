import { TestBed } from '@angular/core/testing';

import { NgXtermService } from './ng-xterm.service';

describe('NgXtermService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgXtermService = TestBed.get(NgXtermService);
    expect(service).toBeTruthy();
  });
});
