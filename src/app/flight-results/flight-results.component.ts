import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css']
})
export class FlightResultsComponent implements OnInit {
  flights = [
    { id: 1, number: 'TK101', price: 500 },
    { id: 2, number: 'TK102', price: 600 }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const searchCriteria = JSON.parse(localStorage.getItem('searchCriteria') || '{}');
    console.log('Search Criteria:', searchCriteria);
    // Burada uçuşları arama kriterlerine göre filtreleyebilirsiniz
  }

  selectFlight(flight: any) {
    localStorage.setItem('selectedFlight', JSON.stringify(flight));
    this.router.navigate(['/details']);
  }

  trackById(index: number, flight: any): number {
    return flight.id;
  }
}
