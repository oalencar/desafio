import { RouterModule, Routes }  from '@angular/router';
import { NgModule } from '@angular/core';

import { AgendaComponent } from './agenda/agenda.component';
import { CadastroIndexComponent } from './cadastro/cadastro-index/cadastro-index.component';
import { HomeComponent } from './home/home.component';
import { LoginIndexComponent } from './login/login-index/login-index.component';
import { LogoutIndexComponent } from './logout/logout-index/logout-index.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'cadastro', component: CadastroIndexComponent },
  { path: 'login', component: LoginIndexComponent },
  { path: 'logout', component: LogoutIndexComponent }
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


