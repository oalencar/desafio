import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_SERVER_APP = 'http://206.189.233.108';

@Injectable()
export class AgendaService {
  
  agendaUrl = URL_SERVER_APP+'/api/agenda';
  contatoUrl = URL_SERVER_APP+'/api/contato';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('access_token')
    })
  };


  constructor(
    private http: HttpClient
  ) { 
    
  }

  public getAgenda(id: number): any{
    return this.http.get(this.agendaUrl+'/'+id, this.httpOptions);
  };

  public storeContato(data): any {
    console.log(this.httpOptions)
    return this.http.post(this.contatoUrl+'/create', data, this.httpOptions);
  }

  public updateContato(data): any {
    return this.http.post(this.contatoUrl+'/update/'+data.id, data, this.httpOptions);
  }

  public destroyContato(data): any {
    return this.http.get(this.contatoUrl+'/delete/'+data, this.httpOptions);
  }


}
