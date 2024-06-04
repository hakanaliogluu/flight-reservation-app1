import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-confirmation',
  templateUrl: './reservation-confirmation.component.html',
  styleUrls: ['./reservation-confirmation.component.css']
})
export class ReservationConfirmationComponent implements OnInit {
  reservation: any;

  ngOnInit() {
    const flight = JSON.parse(localStorage.getItem('selectedFlight') || '{}');
    const passengerDetails = JSON.parse(localStorage.getItem('passengerDetails') || '{}');
    this.reservation = { flight, passengerDetails };
  }
}
