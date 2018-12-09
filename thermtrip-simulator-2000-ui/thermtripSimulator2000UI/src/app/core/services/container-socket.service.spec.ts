import { TestBed } from '@angular/core/testing';

import { ContainerSocketService } from './container-socket.service';

describe('ContainerSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContainerSocketService = TestBed.get(ContainerSocketService);
    expect(service).toBeTruthy();
  });
});
