import { Component } from '@angular/core';

import { BuscaService } from './busca.service';
import { BuscaEmpresaComponent } from './buscaEmpresa/buscaEmpresa.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Invest';
  
  constructor(){}
  
  buscaService = new BuscaService
  buscaEmpresa = new BuscaEmpresaComponent

  
  result:any 

  buscador(term:string) {
    this.result = this.buscaService.findAll(term)
    this.buscaEmpresa.listaResultados(this.result)
    }
  retornresult(){
    return this.result
  }

}

  
