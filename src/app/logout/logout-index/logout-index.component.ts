import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-index',
  templateUrl: './logout-index.component.html',
  styleUrls: ['./logout-index.component.css']
})
export class LogoutIndexComponent implements OnInit {

  router: Router;

  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit(){
    this.logout();
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
