import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupUser: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  };

  loginObj: any = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null){
      this.signupUser = JSON.parse(localData);
    }
  }

  signup() {
    this.signupUser.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUser));
    //this.resetSignupForm();
    this.signupObj = {
      username: '',
      email: '',
      password: '',
      confirmpassword: ''
    };
  }

  login() {
    const user = this.signupUser.find(u => u.username == this.loginObj.username && u.password == this.loginObj.password);
    if (user != undefined) {
      alert('Login successful');
    } else {
      alert('Login failed');
    }
  }

  /*resetSignupForm(): void {
    this.signupObj = {
      username: '',
      email: '',
      password: '',
      confirmpassword: ''
    };
  }*/
}
