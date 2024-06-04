import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  searchCriteria = {
    from: '',
    to: '',
    date: '',
    passengers: 1
  };

  constructor(private router: Router) {}

  searchFlights() {
    // Arama kriterlerini yerel depolamada saklayın
    localStorage.setItem('searchCriteria', JSON.stringify(this.searchCriteria));
    this.router.navigate(['/results']);
  }
}
