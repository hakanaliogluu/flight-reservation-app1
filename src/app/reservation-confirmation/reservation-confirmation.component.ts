import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-confirmation',
  templateUrl: './reservation-confirmation.component.html',
  styleUrls: ['./reservation-confirmation.component.css']
})
export class ReservationConfirmationComponent implements OnInit {
  reservation: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const flight = JSON.parse(localStorage.getItem('selectedFlight') || '{}');
    const passengerDetails = JSON.parse(localStorage.getItem('passengerDetails') || '{}');
    this.reservation = { flight, passengerDetails };
  }

  confirmReservation() {
    // Rezervasyonu kaydetme işlemleri burada yapılacak
    // Örneğin, localStorage'a ekleyebilir veya bir API çağrısı yapabilirsiniz
    // Kaydetme işleminden sonra rezervasyonlarım sayfasına yönlendirme yapılacak
    // Bu örnekte localStorage kullanılarak basit bir kaydetme işlemi gerçekleştirilmiştir
    let reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    reservations.push(this.reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
    // Rezervasyonlarım sayfasına yönlendirme
    this.router.navigate(['/my-reservations']);
  }
}
