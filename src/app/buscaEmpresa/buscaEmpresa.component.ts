import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { BuscaService } from './../busca.service';

@Component({
  selector: 'app-buscaEmpresa',
  templateUrl: './buscaEmpresa.component.html',
  styleUrls: ['./buscaEmpresa.component.css']
})
export class BuscaEmpresaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buscaService = new BuscaService
  empresa = this.buscaService.genId() 

}
