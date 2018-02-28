import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda.component';
import { AgendaService } from './agenda.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgendaComponent],
  providers: [AgendaService]
})
export class AgendaModule { }
