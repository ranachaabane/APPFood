import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationdetailsComponent } from './reservationdetails/reservationdetails.component';
import { BackendModule } from './backend/backend.module';
import { BackofficeModule } from './backoffice/backoffice.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DatePipe } from '@angular/common';
import { ArticaldetailComponent } from './articaldetail/articaldetail.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    ReservationdetailsComponent,
    ArticaldetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
