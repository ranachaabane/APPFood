import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reservation } from '../Model/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  url="http://localhost:3000/reservation"
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}


  addReservation(NResERV : reservation)
  {
    
    return this.http.post<reservation>(this.url,NResERV,this.httpOptions);
  }

  getreservationbyphone(phone : number):Observable<reservation[]>
{


  return this.http.get<reservation[]>(this.url+"?phone="+phone);
  
}
deleteReservation(id :number , phone : number):Observable<reservation>
{
  return this.http.delete<reservation>(this.url+"/"+id);
  
}
deleteReservationbyid(id :number):Observable<reservation>
{
  return this.http.delete<reservation>(this.url+"/"+id);
  
}
updateReservation(id : number , reserv : reservation):Observable<reservation>
{
  return this.http.put<reservation>(this.url+"/"+id,reserv);
}
 
/*getReservationById(id:number):Observable<reservation>
{
  console.log("this is in getReservation"+id)
  return this.http.get<reservation>(this.url+"/"+id);
}*/

getResById(id:number) : Observable<reservation> {

  return this.http.get<reservation>(this.url+"/"+id)
}
getallReservation():Observable<reservation[]> {

  return this.http.get<reservation[]>(this.url)
}
  
}
