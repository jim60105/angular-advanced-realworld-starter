import { Router, RouterModule } from '@angular/router';
import { UserLoginInfo } from './../../interfaces/login-info';
import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLoginInfo = {
    email : "",
    password: ""
  }
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.user).subscribe(
      x => {
        localStorage.setItem('token',x.user.token);
        this.router.navigateByUrl('/');
      }
    )

  }

}
