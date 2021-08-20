import { Pipe, PipeTransform } from '@angular/core';
import { EmpresaService } from './Empresa.service';
import { EmpresasComponent } from './Empresas/Empresas.component';

@Pipe({
  name: 'conversor'
})
export class ConversorPipe implements PipeTransform {
  constructor(private empresaComponent: EmpresasComponent) {
  }
  valorDollar = 0

  getFinance() {
    this.valorDollar = this.empresaComponent.financeList.results.currencies.USD.buy
  }
  
  // NAO ESTA FUNCIONANDO ESTE PIPE
  
  transform(valor:number):number {
    this.getFinance()
    valor * this.valorDollar
    return valor;
  }

}
