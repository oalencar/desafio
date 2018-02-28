import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AgendaService {

  private agendaUrl = 'http://localhost:8001/api/agenda';

  constructor(
    private http: HttpClient
  ) { 
    
  }

  public getAgenda(id: number): any{
    return this.http.get(this.agendaUrl+'/'+id);
  };

}
