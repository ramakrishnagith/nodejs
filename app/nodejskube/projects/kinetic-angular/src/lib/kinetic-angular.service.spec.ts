import { TestBed } from '@angular/core/testing';

import { KineticAngularService } from './kinetic-angular.service';

describe('KineticAngularService', () => {
  let service: KineticAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KineticAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
