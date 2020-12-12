import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { blog } from 'src/app/Model/blog';
import { BlogService } from 'src/app/shared/blog.service';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  formGroup : FormGroup;
  imageSrc: string;
  selectedFile = null;
  blog : blog =
  {
    id : 0 ,
    titre : "",
    image:"",
    date: null ,
    description:""
    
  }
  constructor(private activatedroute:ActivatedRoute ,  private bs : BlogService ,private imageService: ImageService ) {
     this.formGroup = new FormGroup({
    titre: new FormControl("", [
      Validators.required,
      Validators.maxLength(20),
    ]),
    image: new FormControl("", [
      Validators.required,
     
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
get image(){
  return this.formGroup.get("image");
}

get date(){
  return this.formGroup.get("date");
}
get description(){
  return this.formGroup.get("description");
}

ngOnInit(): void {
  
}
addblog(prod:blog ,event)
{
  event.preventDefault();
  console.log(event.target.form[1].files[0].name);
  prod.image=event.target.form[1].files[0].name;
  this.saveImageInLocal(event);

  var txt;
  var r = confirm("ajouter le l'article!");
  if (r == true) {
  
    this.bs.addblog(prod).subscribe();

      
  
  
    confirm("article ajoutée avec sucees!");
    prod=null;
   
  } else {
    confirm("article annulée!");
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
}


}
