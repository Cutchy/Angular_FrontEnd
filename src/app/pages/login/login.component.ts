import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    //console.log(this.login, this.password);
    if (this.authService.logIn(this.login, this.password)) {
      this.router.navigate(['/home']); // Redirige vers la page d'accueil ou une autre page protégée
    } else {
      alert('Login ou mot de passe incorrect');
    }
  }
}