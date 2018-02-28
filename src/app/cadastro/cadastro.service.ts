import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class CadastroService {

  private cadastroUrl = 'http://localhost:8001/api/cadastrar';
  
  constructor(private http: HttpClient) {

  }

  public cadastrar(data: Array<any>){
    console.log(data);
    return this.http.post(this.cadastroUrl, data, httpOptions);
    // now returns an Observable of Config
    //return this.http.get<Config>(this.configUrl);
  };

}
