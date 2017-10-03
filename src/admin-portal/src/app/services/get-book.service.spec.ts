import { TestBed, inject } from '@angular/core/testing';

import { GetBookService } from './get-book.service';

describe('GetBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBookService]
    });
  });

  it('should be created', inject([GetBookService], (service: GetBookService) => {
    expect(service).toBeTruthy();
  }));
});
