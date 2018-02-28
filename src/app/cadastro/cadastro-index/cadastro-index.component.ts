import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-index',
  templateUrl: './cadastro-index.component.html',
  styleUrls: ['./cadastro-index.component.css'],
  providers: [ CadastroService ],
})
export class CadastroIndexComponent implements OnInit {

  private name: string;
  private email: string;
  private password: string;  
  private cadastroService: CadastroService;
  private user: any;
  private router: Router;
  
  constructor(
    cadastroService: CadastroService,
    router: Router
  ) {
      this.cadastroService = cadastroService;
      this.router = router;
  }

  ngOnInit() {
   
  }

  public cadastrar(cadastroForm: NgForm, event){
    event.preventDefault();
    //console.log(cadastroForm.value);
    this.cadastroService.cadastrar(cadastroForm.value)
            .subscribe(
              data => {
              localStorage.setItem('user_name', data.user_name);
              localStorage.setItem('user_agenda_id', data.user_agenda_id);
              localStorage.setItem('user_email', data.user_email);
              localStorage.setItem('user_id', data.user_id);
              this.router.navigate(['/agenda']);
            },
            error => {
              console.log(error) 
            }
          );
  }

}
