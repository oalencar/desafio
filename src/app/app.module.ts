import { LogoutIndexComponent } from './logout/logout-index/logout-index.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CadastroCallbackComponent } from './cadastro/cadastro-callback/cadastro-callback.component';
import { CadastroIndexComponent } from './cadastro/cadastro-index/cadastro-index.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { ContatoListComponent } from './agenda/contato-list/contato-list.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LoginIndexComponent } from './login/login-index/login-index.component';
import { LoginModule } from './login/login.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RoutingModule } from './/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    HomeComponent,
    CadastroCallbackComponent,
    CadastroIndexComponent,
    ContatoListComponent,
    LoginIndexComponent,
    LogoutIndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
