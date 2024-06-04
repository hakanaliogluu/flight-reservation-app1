import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component'; // Ekledik

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: FlightSearchComponent },
  { path: 'results', component: FlightResultsComponent },
  { path: 'details', component: ReservationDetailsComponent },
  { path: 'confirmation', component: ReservationConfirmationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'my-reservations', component: MyReservationsComponent } // Eklendi
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
