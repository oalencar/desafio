import { CadastroIndexComponent } from './cadastro/cadastro-index/cadastro-index.component';
import { CadastroCallbackComponent } from './cadastro/cadastro-callback/cadastro-callback.component';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './/routing.module';
import { HomeModule } from './home/home.module';
import { CadastroModule } from './cadastro/cadastro.module';


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    HomeComponent,
    CadastroCallbackComponent,
    CadastroIndexComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
