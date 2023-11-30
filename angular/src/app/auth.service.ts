import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, senha: string): boolean {
    if (email.includes('@') && email.includes('.com') && senha.length >= 6) {
      return true;
    } else {
      return false;
    }
  }
}
