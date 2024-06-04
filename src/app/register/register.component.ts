import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    phone: '',
    birthdate: ''
  };

  touched = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    gender: false,
    phone: false,
    birthdate: false
  };

  submitted = false;

  constructor(private router: Router) {}

  register() {
    this.submitted = true;

    // Tüm alanları kontrol et
    if (!this.user.firstName.trim() ||
        !this.user.lastName.trim() ||
        !this.user.email.trim() ||
        !this.user.password.trim() ||
        !this.user.gender.trim() ||
        !this.user.phone.trim() ||
        !this.user.birthdate.trim()) {
      alert('Lütfen tüm alanları doldurun.');
      return;
    }

    // Email ve şifre validasyonları
    if (!this.isValidEmail() || !this.isValidPassword()) {
      return;
    }

    // Kullanıcıyı kaydet
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Kayıt başarılı!');
    this.router.navigate(['/login']);
  }

  isValidEmail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.user.email);
  }

  isValidPassword(): boolean {
    return this.user.password.length >= 6 && this.user.password.length <= 50;
  }

  handleInput(field: string) {
    (this.touched as any)[field] = true;
  }
}
