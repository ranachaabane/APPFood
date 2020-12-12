import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { reservation } from '../Model/reservation';
import { ReservationService } from '../shared/reservation.service';

@Component({
  selector: 'app-reservationdetails',
  templateUrl: './reservationdetails.component.html',
  styleUrls: ['./reservationdetails.component.css']
})
export class ReservationdetailsComponent implements OnInit {
  reserv : reservation[];
  formGroup : FormGroup;
  show : number ;
  resevmodif : reservation ;
  idi :number ;
  constructor(private activatedroute:ActivatedRoute  , private rs : ReservationService ){  this.formGroup = new FormGroup({
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
      Validators.max(8),
      Validators.min(8),
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

  ngOnInit( ): void {
   
   
  }
  getallReservations(phone : number)
  {
    this.show = 1;
    this.rs.getreservationbyphone(phone).subscribe(data=>this.reserv= data);
  }
  deletereservation(id : number , phone:number)
  {
    var txt;
    var r = confirm("Confirmer l'annulation de reservation!");
    if (r == true) {
     
      this.show = 1;
      this.rs.deleteReservation(id , phone).subscribe();
      this.rs.getreservationbyphone(phone).subscribe(data=>this.reserv= data);
      confirm("Reservation supprimée avec sucees!");
    } else {
      confirm("annulation de suppression!");
    }
 
  }

  openejao (id : number , reserv : reservation)
  {
    this.rs.getResById(id).subscribe(result =>this.resevmodif = result);
  
   console.log(this.resevmodif);

  

  }

  modifierreservation(id : number , reserv : reservation , phone :number)
  {
  
    var txt;
    var r = confirm("Confirmer modification de reservation!");
    if (r == true) {
     
     
      this.rs.updateReservation(id ,reserv).subscribe();
      this.rs.getreservationbyphone(phone).subscribe(data=>this.reserv= data);
      confirm("Reservation modifiée avec sucees!");
      this.resevmodif=null;

    } else {
      confirm("annulation de modification!");
    }
     
    
  }


}
