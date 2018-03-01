import { ContatoListComponent } from './contato-list/contato-list.component';
import { AgendaService } from './agenda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers: [AgendaService],
  
})
export class AgendaComponent implements OnInit {

  private id: number;
  private titulo: string = '';
  private user_id: number;
  private contatos: Array<{}>
  

  constructor(
    private agendaService: AgendaService
  ){
    this.id = parseInt(localStorage.getItem('user_agenda_id')); 
    this.getAgenda(this.id);
  }

  ngOnInit() {
    
  }

  getAgenda(id: number) {
    this.agendaService.getAgenda(this.id).subscribe(
      data => {
        this.titulo = data.titulo;
        this.contatos = data.contatos;
      },
      error => {}
    );
  }

}
