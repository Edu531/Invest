import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../Empresa.service';
import { BuscaService } from './../busca.service';

@Component({
  selector: 'app-Empresas',
  templateUrl: './Empresas.component.html',
  styleUrls: ['./Empresas.component.css']
})

export class EmpresasComponent implements OnInit {

  title = "Dollar"

  constructor(private empresaService: EmpresaService) { }
  ngOnInit() {
    // comentado ate terminar de testar o front, para nao ficar fazendo request
    // console.log("getEmpresaByCode - inicio")
    // this.getEmpresaByCode()
    // console.log("getEmpresaByCode - final")
    this.getFinance()
    // console.log("getFinance")
    // this.TesteCodigo()
  }


  buscaService = new BuscaService

  codigo = "bidi4"
  empresaByCode = {
    "by": "symbol",
    "valid_key": true,
    "results": {
      "BIDI4": {
        "symbol": "ERRO",
        "name": "ERRO",
        "company_name": "ERRO",
        "document": "ERRO",
        "description": "ERRO",
        "website": "ERRO",
        "region": "ERRO",
        "currency": "ERRO",
        "market_time": {
          "open": "ERRO",
          "close": "ERRO",
          "timezone": -666
        },
        "market_cap": 666,
        "price": 666,
        "change_percent": -666,
        "updated_at": "ERRO"
      }
    },
    "execution_time": 0.0,
    "from_cache": true
  }
  empresaByCode2 = JSON.stringify(this.empresaByCode)
  
  
  // Testa para saber se a empresa retornada é a mesma da requisitada
  empresaCode = ""
  code2 = "BIDI4"
  TesteCodigo(){
    this.codigo = this.codigo.toUpperCase()
    if (this.code2.indexOf(this.codigo) !== -1) {
      this.empresaCode = this.codigo
      console.log(this.empresaCode + "asdfsdafsdfsdf")
  } else { 
    this.empresaCode = "ERRO_FIND_CODE"
    console.log("ERRO_FIND_CODE" + this.codigo + this.code2.indexOf(this.codigo) + this.code2)
  }}

  
  getEmpresaByCode() {
    this.empresaService.getEmpresaByCode$(this.codigo).subscribe(
      data => {
        this.empresaByCode = data;
        console.log(this.empresaByCode + "empresaByCode");
      },
      error => console.log(error)
    )
  }

  getFinance() {
    this.empresaService.getFinance$().subscribe(
      data => {
        this.financeList = data;
        console.log(this.financeList);
      },
      error => console.log(error)
    )
  }

  financeList = {
    "results": {
      "currencies": {
        "source": "BRL",
        "USD": {
          "name": "Dollar",
          "buy": 6.666,
          "sell": 6.666,
          "variation": 6.666
        },
      }
    }
  }


}
