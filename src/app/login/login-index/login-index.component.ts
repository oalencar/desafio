import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { LoginService } from './../login.service';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.css'],
  providers: [ LoginService ]
})
export class LoginIndexComponent implements OnInit {

  loginService: LoginService;
  router: Router; 
  userLoggedIn: boolean = false;

  constructor(
    loginService: LoginService,
    router: Router,
  ) { 
    this.loginService = loginService;
    this.router = router;
  }

  ngOnInit() {
  }

  login(loginForm: NgForm, event){
    event.preventDefault();
    this.loginService.login(loginForm.value)
            .subscribe(
              data => {
                console.log(data);
              this.loginService.storeCredenciais(data);
              this.getUser();
            },
            error => {
              console.log(error) 
            }
          );
  }

  getUser(){
    this.loginService.getUser().subscribe(
      data => {
        this.loginService.armazenarDadosUsuario(data);
        this.router.navigate(['/agenda']);
      },
      error => {
        console.log(error);
      }
    )
  }

  emitLoggedIn(){
    
  }

}
