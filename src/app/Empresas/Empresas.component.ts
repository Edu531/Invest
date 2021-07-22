import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EmpresaService } from '../Empresa.service';

@Component({
  selector: 'app-Empresas',
  templateUrl: './Empresas.component.html',
  styleUrls: ['./Empresas.component.css']
})
export class EmpresasComponent implements OnInit {



  empresas$!: Observable<string>;
  private buscarTerm = new Subject<string>();

  constructor() { }

  ngOnInit() {
  }

}
