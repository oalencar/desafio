import { CadastroIndexComponent } from './cadastro/cadastro-index/cadastro-index.component';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'cadastro', component: CadastroIndexComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class RoutingModule { 
}


