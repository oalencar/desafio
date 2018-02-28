import { AgendaService } from './../agenda.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css'],
  providers: [AgendaService]
})

export class ContatoListComponent implements OnInit {
  private agendaService: AgendaService;
  constructor(
    agendaService: AgendaService
  ) { 
    this.agendaService = agendaService;
  }

  ngOnInit() {
  }

  @Input('contatos') contatos: Array<{}>;

  atualizarContato(data) {
    this.agendaService.updateContato(data).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  excluirContato(c) {
    var contato = c;
    
    this.agendaService.destroyContato(contato.id).subscribe(
      data => {
        if (data.status === 'success') {
          this.removeByKey(this.contatos,{
            key: 'id',
            value: contato.id
          });
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  removeByKey(array, params){
    array.some(function(item, index) {
      return (array[index][params.key] === params.value) ? !!(array.splice(index, 1)) : false;
    });
    return array;
  }

}
