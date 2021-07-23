import { Component } from '@angular/core';

import { BuscaService } from './busca.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Invest';
  
  constructor(){}
  
  buscaEmpresa = new BuscaService
  
  buscador(term:string) {
    this.buscaEmpresa.findAll(term)
    }

}

  
