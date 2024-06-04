import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(status => {
      this.isLoggedIn = status;
    });
    this.authService.checkLoginStatus();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  navigateToReservations() {
    if (this.isLoggedIn) {
      this.router.navigate(['/my-reservations']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
