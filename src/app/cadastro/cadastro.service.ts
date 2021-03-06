import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

const URL_SERVER_APP = 'http://206.189.233.108';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class CadastroService {

  private cadastroUrl = URL_SERVER_APP+'/api/cadastrar';
  
  constructor(private http: HttpClient) {

  }

  public cadastrar(data): any{
    return this.http.post(this.cadastroUrl, data, httpOptions);
  };

}
