import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImageSnippet } from 'src/app/Model/ImageSnippet';
import { Product } from 'src/app/Model/Product';
import { ImageService } from 'src/app/shared/image.service';
import { ProductService } from 'src/app/shared/product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers:[ImageService]
})
export class AddproductComponent implements OnInit {
  formGroup : FormGroup;

  imageSrc: string;
  selectedFile = null;
  prod : Product=
  {
    id : null ,
    name : "" ,
    image : "" ,
    quantity : 0 ,
    price : 0 ,
    type: "",
    description : "" 
  };

  constructor(private imageService: ImageService ,private activatedroute:ActivatedRoute ,  private rs : ProductService ) {
    
    this.formGroup = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(20),
      ]),
      image: new FormControl("", [
        Validators.required,
       
      ]),
      quantity: new FormControl("", [
        Validators.required,
       
      ]),
      price: new FormControl("", [
        Validators.required,
       
      ]),
      
      type: new FormControl("", [
        Validators.required,
       
      ]),
      description: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
   
       
      ]),
         
   
    
    });
   }
   get name(){
    return this.formGroup.get("name");
  }
  get image(){
    return this.formGroup.get("image");
  }
  get quantity(){
    return this.formGroup.get("quantity");
  }
  get price(){
    return this.formGroup.get("price");
  }
  get type(){
    return this.formGroup.get("type");
  }
  get description(){
    return this.formGroup.get("description");
  }

  ngOnInit(): void {
    
  }

  addProduct(prod:Product ,event)
  {
    event.preventDefault();
    console.log(event.target.form[1].files[0].name);
    prod.image=event.target.form[1].files[0].name;
    this.saveImageInLocal(event);
  
    var txt;
    var r = confirm("ajouter le plat!");
    if (r == true) {
    
      this.rs.addProduct(prod).subscribe();
 
        
    
    
      confirm("Plat ajoutée avec sucees!");
      prod=null;
     
    } else {
      confirm("Plat annulée!");
    }
   
  
  
  }
  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.formGroup.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }

saveImageInLocal = (event) => {
    this.selectedFile = <File>event.target.form[1].files[0];
    const fd = new FormData();
    this.imageService.saveImage(fd, this.selectedFile);
  };
 
  

}
