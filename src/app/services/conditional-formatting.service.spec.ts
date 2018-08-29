import { TestBed, inject } from '@angular/core/testing';

import { ConditionalFormattingService } from './conditional-formatting.service';

describe('ConditionalFormattingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConditionalFormattingService]
    });
  });

  it('should be created', inject([ConditionalFormattingService], (service: ConditionalFormattingService) => {
    expect(service).toBeTruthy();
  }));
});
