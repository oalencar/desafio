import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'app';
  public loggedIn: boolean;
  subscription: Subscription;


  constructor(
  ){
    this.isLogged();
  }

  ngOnInit(){
    setInterval(()=> { this.isLogged() }, 1000)
  }

  isLogged(){
    let access_token = localStorage.getItem('access_token');
    if (access_token) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  setLoggedIn(data){
    this.loggedIn = data;
  }

}
