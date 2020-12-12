import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blog } from './Model/blog';
import { Product } from './Model/Product';
import { BlogService } from './shared/blog.service';
import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodApp';
  forAdmin=0;
  prod : Product[];
  blog : blog[];
  prodsalad : Product[];
  prodpizza : Product[];
  prodstarter : Product[];
  constructor(private activatedroute:ActivatedRoute ,  private rs : ProductService, private bs : BlogService) { }

  ngOnInit(): void {
    this.rs.getallProductSalad().subscribe(data=>this.prodsalad= data);
    this.rs.getallProductPizza().subscribe(data=>this.prodpizza= data);
    this.rs.getallProductstarter().subscribe(data=>this.prodstarter= data);
    this.bs.getallblog().subscribe(data=>this.blog= data);
  }
 
  toggleView()
  {
    this.forAdmin=1;
  }
}
