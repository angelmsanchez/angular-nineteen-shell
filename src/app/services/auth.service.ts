import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName = 'Init User';

  getUserName(): string {
    return this.userName;
  }

  setUserName(name: string): string {
    return (this.userName = name);
  }
}
