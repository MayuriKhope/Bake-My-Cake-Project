import { TestBed } from '@angular/core/testing';

import { RouteNavigationService } from './route-navigation.service';

describe('RouteNavigationService', () => {
  let service: RouteNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
