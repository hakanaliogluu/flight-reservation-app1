import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  passengerDetails = {
    name: '',
    surname: '',
    email: '',
    phone: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const selectedFlight = JSON.parse(localStorage.getItem('selectedFlight') || '{}');
    console.log('Selected Flight:', selectedFlight);
    // Burada seçilen uçuşa ait bilgileri alabilirsiniz
  }

  completeReservation() {
    // Rezervasyon işlemini tamamlamak için gerekli işlemleri yapın
    console.log('Reservation Details:', this.passengerDetails);
    // Örneğin, burada bir API çağrısı yapabilirsiniz
    localStorage.setItem('passengerDetails', JSON.stringify(this.passengerDetails));
    this.router.navigate(['/confirmation']);
  }
}
