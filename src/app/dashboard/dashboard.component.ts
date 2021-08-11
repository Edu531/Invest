import { Component, OnInit } from '@angular/core';
import { Empresa } from './../empresa';
import { BuscaService } from './../busca.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
    ngOnInit() {
    
    }
    
    title = 'Ibovespa';

    pag = 1;
    contador = 9;

    buscaService = new BuscaService
    empresa:any = this.buscaService.genId()
    
    




}
