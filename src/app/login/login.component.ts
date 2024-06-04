import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private cd: ChangeDetectorRef, private authService: AuthService) {}

  login() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((user: any) =>
      user.email === this.credentials.email && user.password === this.credentials.password);

    if (user) {
      this.authService.login();
      this.cd.detectChanges();
      this.router.navigate(['/']);
    } else {
      alert('Yanlış email veya şifre');
    }
  }
}