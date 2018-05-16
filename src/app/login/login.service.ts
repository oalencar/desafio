import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

const URL_SERVER_APP = 'http://206.189.233.108';

@Injectable()
export class LoginService {

  userUrl = URL_SERVER_APP+'/api/user';
  tokenUrl = URL_SERVER_APP+'/oauth/token';

  httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json'
    })
  };

  data = {
        'grant_type' : 'password',
        'client_id' : 2,
        'client_secret' : 'pA0Pvgs7WXfsrsFN6vN5rVB5Nqo8LqtYA1LScyWL',
        'username' : null,
        'password' : null,
        'scope' : '',
  };
  

  constructor(private http: HttpClient) {

  }

  public login(formValue){
    this.data.username = formValue.email;
    this.data.password = formValue.password;
    return this.http.post(this.tokenUrl, this.data)
  }

  public storeCredenciais(data) {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('expires_in', data.expires_in);
    localStorage.setItem('refresh_token', data.refresh_token);
    localStorage.setItem('token_type', data.token_type);
  }

  public armazenarDadosUsuario(dados){
    localStorage.setItem('user_agenda_id', dados.agendas[0].id);
    localStorage.setItem('user_email', dados.email);
    localStorage.setItem('user_id', dados.id);
    localStorage.setItem('user_name', dados.name);
  }

  public getUser() {
    return this.http.get(this.userUrl, {
      headers: new HttpHeaders({
        'Accept':  'application/json',
        'Authorization' : 'Bearer '+localStorage.getItem('access_token')
      })
    });
  }

}
