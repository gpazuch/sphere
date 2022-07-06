import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';
import { TokenService } from './token.service';

describe('TokenInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TokenInterceptor, TokenService],
    })
  );

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
