import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Model/Product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  term: string;
  prod : Product[];
  nbrprod =0;
  productlist:Product[];
  show : number ;
  showMenu : number ;
  prodmodifi : Product ;
  idi :number ;
  prodsalad : Product[];
  prodpizza : Product[];
  prodstarter : Product[];

  constructor(private activatedroute:ActivatedRoute ,  private rs : ProductService) { }

  ngOnInit(): void {
  }
  getallProduct()
  {
    this.showMenu= 1;
    this.show = 1;
    this.rs.getallProduct().subscribe(data=>this.prod= data);
  }
  deletProduit(id : number )
  {
    var txt;
    var r = confirm("Confirmer la supprission du plat!");
    if (r == true) {
     
      this.show = 1;
      this.rs.deleteProduct(id).subscribe();
      this.rs.getallProduct().subscribe(data=>this.prod= data);
      this.rs.getallProduct().subscribe(data=>{this.productlist=data;
        this.nbrprod=this.productlist.length-1;});
        console.log(this.nbrprod);
 
    } else {
      confirm("annulation de suppression!");
    }
 
  }

  openejao (id : number , produit : Product)
  {
    this.rs.getproduitbyid(id).subscribe(result =>this.prodmodifi = result);
  
   console.log(this.prodmodifi);
   this.showMenu= 5;
  

  }

  updateProduct(id : number , reserv : Product )
  {
  
    var txt;
    var r = confirm("Confirmer modification de Plat!");
    if (r == true) {
     
     
      this.rs.updateProduit(id ,reserv).subscribe();
      this.rs.getallProduct().subscribe(data=>this.prod= data);
  
      this.prodmodifi=null;
      this.showMenu= 1;

    } else {
      confirm("annulation de modification!");
    }
     
    
  }
  
  
 
  getPizza()
  {
    this.showMenu= 2;
    this.rs.getallProductPizza().subscribe(data=>this.prodpizza= data);
  }
  getSalad()
{
  this.showMenu= 4;
  this.rs.getallProductSalad().subscribe(data=>this.prodsalad= data);
}
  getStarter()
  {
    this.showMenu= 3;
    this.rs.getallProductstarter().subscribe(data=>this.prodstarter= data);
  }

}
