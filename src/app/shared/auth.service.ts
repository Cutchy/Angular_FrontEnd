import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users = [
    { login: 'user1', password: '123', role: 'user' },
    { login: 'admin1', password: 'azerty', role: 'admin' }
  ];

  loggedIn = false;
  private userRole: string | null = null;

  logIn(login: string, password: string): boolean {
    const user = this.users.find(u => u.login === login && u.password === password);
    
    if (user) {
      this.loggedIn = true;
      this.userRole = user.role;
      return true;
    }
    return false;
  }

  logOut() {
    this.loggedIn = false;
    this.userRole = null;
  }

  isLogged(): Promise<boolean> {
    return Promise.resolve(this.loggedIn);
  }

  isAdmin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(this.loggedIn && this.userRole === 'admin');
    });
  }
}
