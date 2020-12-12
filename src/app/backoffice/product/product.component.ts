import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { reservation } from 'src/app/Model/reservation';
import { user } from 'src/app/Model/user';
import { ProductService } from 'src/app/shared/product.service';
import { ReservationService } from 'src/app/shared/reservation.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() updatednbr ;
loggededInUser : user ;
reserv : reservation[];
term: string;
nbrprod =0;
productlist :Product[];
 dateNow: Date = new Date(); 
datestring : string;

  constructor(private activatedroute:ActivatedRoute  , private rs : ReservationService ,private rp : ProductService ,private datePipe: DatePipe) { }

  ngOnInit(
    
  ): void {
    this.loggededInUser=JSON.parse(localStorage.getItem("User"));
   
      this.rs.getallReservation().subscribe(data=>this.reserv=data);

      this.rp.getallProduct().subscribe(data=>{this.productlist=data;
        this.nbrprod=this.productlist.length});
   
        this.datestring = this.datePipe.transform(this.dateNow, 'yyyy-MM-dd');
        
      
  }
  
  deletereservationbyId(id : number)
  {
    var txt;
    var r = confirm("Confirmer l'annulation de reservation!");
    if (r == true) {
     
    
      this.rs.deleteReservationbyid(id ).subscribe();
      this.rs.getallReservation().subscribe(data=>this.reserv= data);
      confirm("Reservation supprimée avec sucees!");
    } else {
      confirm("annulation de suppression!");
    }
 
  }
 }
