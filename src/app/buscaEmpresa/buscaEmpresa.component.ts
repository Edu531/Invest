import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BuscaService } from '../busca.service';


@Component({
    selector: 'app-buscaEmpresa',
    templateUrl: './buscaEmpresa.component.html',
    styleUrls: ['./buscaEmpresa.component.css']
})
export class BuscaEmpresaComponent implements OnInit {


    resultado$!: Promise<string[]>
    

    title = 'Ibovespa';

    pag = 1;
    contador = 9;

    buscaService = new BuscaService
    resultado = this.buscaService.resultado

    constructor() { }

    
    ngOnInit() {
    }
    /* genId(){
          for(let i=0; i<this.empresa.length; i++) {
              this.empresa[i].id = "i"
              this.empresa.indexOf
          }
          return this.empresa;
      } */

    


   
}
