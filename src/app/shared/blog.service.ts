import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { blog } from '../Model/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  url="http://localhost:3000/blog"
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

  addblog(NResERV : blog)
  {
    
    return this.http.post<blog>(this.url,NResERV,this.httpOptions);
  }

  deleteblog(id :number):Observable<blog>
  {
    return this.http.delete<blog>(this.url+"/"+id);
    
  }
  updateProduit(id : number , reserv : blog):Observable<blog>
  {
    return this.http.put<blog>(this.url+"/"+id,reserv);
  }
   
  /*getblogById(id:number):Observable<blog>
  {
    console.log("this is in getblog"+id)
    return this.http.get<blog>(this.url+"/"+id);
  }*/
  
  getBlogbyId(id:number) : Observable<blog> {
  
    return this.http.get<blog>(this.url+"/"+id)
  }
  getallblog():Observable<blog[]> {
  
    return this.http.get<blog[]>(this.url)
  }

}
