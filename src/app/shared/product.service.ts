import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  url="http://localhost:3000/Product"
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

  addProduct(NResERV : Product)
  {
    
    return this.http.post<Product>(this.url,NResERV,this.httpOptions);
  }

  deleteProduct(id :number):Observable<Product>
  {
    return this.http.delete<Product>(this.url+"/"+id);
    
  }
  updateProduit(id : number , reserv : Product):Observable<Product>
  {
    return this.http.put<Product>(this.url+"/"+id,reserv);
  }
   
  /*getProductById(id:number):Observable<Product>
  {
    console.log("this is in getProduct"+id)
    return this.http.get<Product>(this.url+"/"+id);
  }*/
  
  getproduitbyid(id:number) : Observable<Product> {
  
    return this.http.get<Product>(this.url+"/"+id)
  }
  getallProduct():Observable<Product[]> {
  
    return this.http.get<Product[]>(this.url)
  }
  getallProductSalad():Observable<Product[]> {
  
    return this.http.get<Product[]>(this.url+"?type=SALAD")
  }
  getallProductPizza():Observable<Product[]> {
  
    return this.http.get<Product[]>(this.url+"?type=PIZZA")
  }
  getallProductstarter():Observable<Product[]> {
  
    return this.http.get<Product[]>(this.url+"?type=STARTER")
  }
}
