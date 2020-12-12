import { Component, OnInit } from '@angular/core';
import { UserService } from "../../shared/user.service";
import { user } from "../../Model/user";

import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  formGroup: FormGroup;
  isUserLoggedIn: boolean = false;
  

  constructor( private us: UserService, private _router: Router) { 
  }
  get username() {
    return this.formGroup.get("username");
  }
  get password() {
    return this.formGroup.get("password");
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }
  loginUser = () => {
    this.us.login(this.username.value).subscribe(
      (result) => {
        console.log(result)
        if (result.password == this.password.value) {
          localStorage.setItem("user", JSON.stringify(result));
          this._router.navigate(["/product"]);
        } 
  })
  };
}

