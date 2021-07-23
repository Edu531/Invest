import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BuscaService } from '../busca.service';
import { Empresa } from '../empresa';


@Component({
    selector: 'app-buscaEmpresa',
    templateUrl: './buscaEmpresa.component.html',
    styleUrls: ['./buscaEmpresa.component.css']
})
export class BuscaEmpresaComponent implements OnInit {

    buscaService = new BuscaService

    resultado$!: Observable<any>
    resultadoSubscription = Subscription
    resultado:any
    

    title = 'Ibovespa';

    pag = 1;
    contador = 9;

    
    

    constructor() { }

    
    ngOnInit() {
        this.resultado$ = new Observable((observer: Observer<string>) => {setInterval(() => observer.next(this.buscaService.listaBusca), 1000);})
        console.log(this.resultado$);

        this.resultadoSubscription = this.resultado$.subscribe(resultado => this.resultado = resultado);
    }
    /* genId(){
          for(let i=0; i<this.empresa.length; i++) {
              this.empresa[i].id = "i"
              this.empresa.indexOf
          }
          return this.empresa;
      } */

    


   
}
