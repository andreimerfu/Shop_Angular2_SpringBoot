import { TestBed, inject } from '@angular/core/testing';

import { AddBookService } from './add-book.service';

describe('AddBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddBookService]
    });
  });

  it('should be created', inject([AddBookService], (service: AddBookService) => {
    expect(service).toBeTruthy();
  }));
});
