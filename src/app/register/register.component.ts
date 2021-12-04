import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {

  }

  createAccount(registerForm: any){
    console.log("register Form Values : " + JSON.stringify(registerForm.value));

    console.log("user Values : " + JSON.stringify(this.user));
  }

}
