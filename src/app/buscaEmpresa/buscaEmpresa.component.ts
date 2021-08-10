import { Component, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { BuscaService } from '../busca.service';
import { AppComponent } from './../app.component';
import { async } from '@angular/core/testing';



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
    
    listaResultados(resultado:String) {
        this.result = resultado
    }
    term = AppComponent
    result: String = "asdf" // tentar colocar a variavel atualizada no NgFor 

    constructor() { }

    
    ngOnInit() {
        /* this.resultado$ = new Observable((observer: Observer<string>) => {setInterval(() => observer.next(this.buscaService.listaBusca), 1000);})

        this.resultado$.subscribe(val => console.log(this.buscaService.resultado))
        let val = this.resultado$.forEach
        console.log(val) */

        this.resultado$.subscribe()
    }
    /* genId(){
          for(let i=0; i<this.empresa.length; i++) {
              this.empresa[i].id = "i"
              this.empresa.indexOf
          }
          return this.empresa;
      } */

    


   
}
