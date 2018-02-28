import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { AgendaService } from './agenda.service';
import { ContatoListComponent } from './contato-list/contato-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  declarations: [AgendaComponent, ContatoListComponent, NgbModal],
  providers: [AgendaService],
})
export class AgendaModule { }
