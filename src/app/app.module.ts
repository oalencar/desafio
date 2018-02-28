import { ContatoListComponent } from './agenda/contato-list/contato-list.component';
import { CadastroIndexComponent } from './cadastro/cadastro-index/cadastro-index.component';
import { CadastroCallbackComponent } from './cadastro/cadastro-callback/cadastro-callback.component';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RoutingModule } from './/routing.module';
import { HomeModule } from './home/home.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    HomeComponent,
    CadastroCallbackComponent,
    CadastroIndexComponent,
    ContatoListComponent,
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
