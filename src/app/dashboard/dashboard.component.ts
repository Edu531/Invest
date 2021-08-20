import { Component, OnInit } from '@angular/core';
import { BuscaService } from './../busca.service';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {
    constructor(private buscaService: BuscaService) {}
    
    ngOnInit() {
    }

    title = 'Ibovespa';

    pag = 1;
    contador = 9;

    empresa:any = this.buscaService.getListaComId()
    

}
