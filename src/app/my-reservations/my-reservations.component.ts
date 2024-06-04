import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.component.html',
  styleUrls: ['./my-reservations.component.css']
})
export class MyReservationsComponent implements OnInit {
  reservations: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations() {
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      this.reservations = JSON.parse(storedReservations);
    }
  }

  cancelReservation(index: number) {
    this.reservations.splice(index, 1); // İlgili rezervasyonu listeden kaldır
    localStorage.setItem('reservations', JSON.stringify(this.reservations)); // Güncellenmiş rezervasyonları kaydet
  }
}
