import { AgendaService } from './../agenda.service';
import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css'],
  providers: [AgendaService]
})

export class ContatoListComponent implements OnInit {
  
  private agendaService: AgendaService;
  private ngbModal: NgbModal;
  private novoContato: any = {"nome": "", "telefone": "", "agenda_id" : null};
  private agenda_id: number;
  private searchText: string = '';

  constructor(
    agendaService: AgendaService,
    ngbModal: NgbModal,
  ) { 
    this.agendaService = agendaService;
    this.ngbModal = ngbModal;
    this.setAgendaId(this.getAgendaId());
  }

  ngOnInit() {
    setInterval(()=>{
      if (this.contatos ){
        this.sortContatos();   
      }
    }, 500)
  }

  @Input('contatos') contatos: Array<any>;

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

  openModal(content){
    this.ngbModal.open(content);
  }

  adicionarContato(data){
    this.agendaService.storeContato(data).subscribe(
      data => {
        this.contatos.push(data.contato);
        this.novoContato.nome = '';
        this.novoContato.telefone = ''
      },
      error => {}
    );
  }

  getAgendaId(){
    return this.agenda_id = parseInt(localStorage.getItem('user_agenda_id'));
  }

  setAgendaId(agendaId){
    this.novoContato.agenda_id = agendaId;
  }

  sortContatos (){
    this.contatos.sort(function(a,b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
    });
  }

}
