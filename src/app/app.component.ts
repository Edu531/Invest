import { Component } from '@angular/core';
import { BuscaEmpresaComponent } from './buscaEmpresa/buscaEmpresa.component';
import { BuscaService } from './busca.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Invest';
  
  constructor(){}
  
  buscaEmpresa = new BuscaEmpresaComponent
  
  buscador(term:string) {
    this.buscaService.findAll(term)
    }
    buscaService = new BuscaService
}

  
