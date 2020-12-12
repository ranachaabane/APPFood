import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { reservation } from '../Model/reservation';
import { ReservationService} from '../shared/reservation.service'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  formGroup : FormGroup;
  datenow :any ;
 reserv : reservation=
 {
  id : 0 ,
  firstName : "" ,
  lastName : "" ,
  email : "" ,
  capacity : "" ,
  phone : 0 ,
  date : null,
  time: null ,
  message : "" 

 } ;
  constructor(private activatedroute:ActivatedRoute  , private rs : ReservationService ) { 
    this.datenow= Date.now() ;
    this.formGroup = new FormGroup({
      firstName: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
      ]),
      email: new FormControl("", [
        Validators.required,
        
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]),
      message: new FormControl("", [
        Validators.required,
       
      ]),
      date: new FormControl("", [
        Validators.required,
   
       
      ]),
      time: new FormControl("", [
        Validators.required,
   
       
      ]),
         
      capacity: new FormControl("", [
        Validators.required,
      
      ]),
      
      phone: new FormControl("", [
        Validators.required,
       
      ]),
    
    });
  }
  get phone(){
    return this.formGroup.get("phone");
  }
  get date(){
    return this.formGroup.get("date");
  }
  get time(){
    return this.formGroup.get("time");
  }

  get message(){
    return this.formGroup.get("message");
  }
  get email(){
    return this.formGroup.get("email");
  }
  get lastName(){
    return this.formGroup.get("lastName");
  }
  get firstName(){
    return this.formGroup.get("firstName");
  }
  get capacity(){
    return this.formGroup.get("capacity");
  }
  ngOnInit(): void {
  }
  addReservation(reserv:reservation)
  {
    var txt;
    var r = confirm("Confirmer la reservation!");
    if (r == true) {
     
      this.rs.addReservation(reserv).subscribe();
      confirm("Reservation ajoutée avec sucees!");
      reserv=null;
    } else {
      confirm("reservation annulée!");
    }
   
  }
}



