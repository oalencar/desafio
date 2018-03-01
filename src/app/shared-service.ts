import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class SharedService {

  

  constructor() { 
    
  }

  private userLoggedIn = new Subject<boolean>();

  emitUserLoggedIn(data: boolean) {
    this.userLoggedIn.next(data);
  }

  getUserLoggedIn(): Observable<any> {
    return this.userLoggedIn.asObservable();
  }

}
