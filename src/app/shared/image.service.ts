import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}

  saveImage = (fd: FormData, selectedFile: File) => {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    headers.append("Accept", "application/json");
    fd.append("image", selectedFile, selectedFile.name);
    this.http
      .post("http://localhost:8080/scriptfoodimage.php", fd, {
        headers: headers,
      })
      .subscribe(() => {
        console.log("it worked");
      });
  };

}
