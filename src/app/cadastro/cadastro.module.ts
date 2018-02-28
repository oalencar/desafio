import { CadastroCallbackComponent } from './cadastro-callback/cadastro-callback.component';
import { CadastroIndexComponent } from './cadastro-index/cadastro-index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroService } from './cadastro.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CadastroIndexComponent,
    CadastroCallbackComponent
  ],
  providers: [CadastroService]
})
export class CadastroModule { }
