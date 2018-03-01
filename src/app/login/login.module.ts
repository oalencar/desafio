import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginIndexComponent } from './login-index/login-index.component';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ LoginIndexComponent ],
  providers: [ LoginService ]
})
export class LoginModule { }
