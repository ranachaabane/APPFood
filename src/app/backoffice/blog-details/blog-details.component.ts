import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { blog } from 'src/app/Model/blog';
import { BlogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  formGroup : FormGroup;
  term: string;
blogliste : blog[] ;
prodmodifi : blog ;
show : number;
  constructor(private activatedroute:ActivatedRoute , private bs : BlogService) { 
    this.formGroup = new FormGroup({
      titre: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
      ]),

     
      
      date: new FormControl("", [
        Validators.required,
       
      ]),
      description: new FormControl("", [
        Validators.required,
        Validators.maxLength(370),
   
       
      ]),
         
   
    
    });
  }
  get titre(){
    return this.formGroup.get("titre");
  }

  
  get date(){
    return this.formGroup.get("date");
  }
  get description(){
    return this.formGroup.get("description");
  }

  ngOnInit(): void {
    

    this.show = 0;
    this.bs.getallblog().subscribe(data=>this.blogliste= data);
  }

  
  deletblog(id : number )
  {
    var txt;
    var r = confirm("Confirmer la supprission de l'article !");
    if (r == true) {
     
     
      this.bs.deleteblog(id).subscribe(()=>{this.bs.getallblog().subscribe(data=>this.blogliste= data)});
     
     
     
    } else {
      confirm("annulation de suppression!");
    }
 
  }
  openejao (id : number , produit : blog)
  {
    this.bs.getBlogbyId(id).subscribe(result =>this.prodmodifi = result);
  this.show = 1;
  
  

  }

  updateblog(id : number , reserv : blog )
  {
  
    var txt;
    var r = confirm("Confirmer modification de l'article!");
    if (r == true) {
     
     
      this.bs.updateProduit(id ,reserv).subscribe(()=>{this.bs.getallblog().subscribe(data=>this.blogliste= data)});
      this.show = 0;
      
  

    } else {
      confirm("annulation de modification!");
    }
     
    
  }

}
