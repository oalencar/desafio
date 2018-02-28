import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AgendaService {

  private agendaUrl = 'http://localhost:8001/api/agenda';
  private contatoUrl = 'http://localhost:8001/api/contato';

  constructor(
    private http: HttpClient
  ) { 
    
  }

  public getAgenda(id: number): any{
    return this.http.get(this.agendaUrl+'/'+id);
  };

  public storeContato(data): any {
    return this.http.post(this.contatoUrl+'/store/'+data.id, data);
  }

  public updateContato(data): any {
    return this.http.post(this.contatoUrl+'/update/'+data.id, data);
  }

  public destroyContato(data): any {
    return this.http.get(this.contatoUrl+'/delete/'+data);
  }


}
