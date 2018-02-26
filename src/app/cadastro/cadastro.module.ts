import { CadastroCallbackComponent } from './cadastro-callback/cadastro-callback.component';
import { CadastroIndexComponent } from './cadastro-index/cadastro-index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CadastroIndexComponent,
    CadastroCallbackComponent
  ]
})
export class CadastroModule { }
