import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarContato'
})
export class FiltrarContatoPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }


  // transform(contatos: any[], searchText: string): any[] {
  //   if(!contatos) return [];
  //   if(!searchText) return contatos;
  //   searchText = searchText.toLowerCase();
  //   return contatos.filter( it => {
  //     return it.nome
  //   });
  //  }

  // transform(contatos: any, name: any, caseInsensitive: boolean): any {
  //   if (name !== undefined) {
  //       // filter users, users which match and return true will be kept, false will be filtered out
  //       return contatos.filter((user) => {
  //           if (caseInsensitive) {
  //               return (contatos.nome.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  //           } else {
  //               return (contatos.nome.indexOf(name) !== -1);
  //           }
  //       });
  //   }
  //   return contatos;
  // }
  
  transform(value, args?) {
    // ES6 array destructuring
    
    return value.filter(contato => {
      return contato.nome;
    });
  }


}
