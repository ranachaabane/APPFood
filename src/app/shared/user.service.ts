import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { user } from "../Model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {url = "http://localhost:3000/users";
constructor(private _http: HttpClient) {}

register = (user: user): Observable<user> => {
  return this._http.post<user>(this.url, user);
};

login = (email: string): Observable<user> => {
  return this._http.get<user>(this.url+"?username="+email);
  
}

logout = () => {
  //localStorage.removeItem("User");
  localStorage.clear();
};
}
