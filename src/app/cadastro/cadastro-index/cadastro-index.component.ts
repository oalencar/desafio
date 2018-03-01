import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  cadastrar(cadastroForm: NgForm, event){
    event.preventDefault();
    this.cadastroService.cadastrar(cadastroForm.value)
          .subscribe(
            data => {
              this.router.navigate(['/login']);
            },
            error => {
              console.log(error) 
            }
          );
  }

}
