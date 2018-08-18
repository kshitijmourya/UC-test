import { FilterBusinessPipe } from './filter-business.pipe';
import { TestBed, inject } from '@angular/core/testing';

describe('FilterBusinessPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
