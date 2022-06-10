import { Injectable } from '@angular/core';

export enum TokenDomains {
  OrbAPI = 'orb-auth-token',
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string, domain: TokenDomains) {
    window.sessionStorage.setItem(domain, token);
  }

  retrieveToken(domain: TokenDomains): string | null {
    return window.sessionStorage.getItem(domain);
  }

  isExpired() {
    
  }

  clear() {

  }

  expireDate() {

  }
}
