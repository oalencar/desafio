import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { AgendaService } from './agenda.service';
import { ContatoListComponent } from './contato-list/contato-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgendaComponent, ContatoListComponent],
  providers: [AgendaService]
})
export class AgendaModule { }
