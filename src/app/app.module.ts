import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightResultsComponent } from './flight-results/flight-results.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightSearchComponent,
    FlightResultsComponent,
    ReservationDetailsComponent,
    ReservationConfirmationComponent,
    LoginComponent,
    RegisterComponent,
    MyReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
