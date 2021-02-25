import { TestBed } from '@angular/core/testing';

import { BlenderService } from './blender.service';

describe('BlenderService', () => {
  let service: BlenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
