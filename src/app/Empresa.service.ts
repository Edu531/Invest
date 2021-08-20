import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';
import { catchError, retry, tap } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class EmpresaService {

  constructor(private http: HttpClient) { }

  corsUrl:string = "https://cors-anywhere.herokuapp.com/"
  APIUrl: string = "https://api.hgbrasil.com/finance/"  // URL to web api. 
  KEYUrl: string = "?key=23d420e5"
  stock_priceUrl:string = "stock_price"
  symbolUrl: string = "&symbol="
  // Exemplo:  corsUrl + APIUrl + KEYUrl + symbolUrl + codigo

  getFinance$(): Observable<any> {
    console.log("URL:" + this.corsUrl + this.APIUrl + this.KEYUrl)
    return this.http.get(this.corsUrl + this.APIUrl + this.KEYUrl).pipe(
      tap(
        result => {
          console.log('Result ', result);
        }
      )
    );
  }

  getEmpresaByCode$(codigo: string): Observable<any> {
    const url = `${this.corsUrl}${this.APIUrl}${this.stock_priceUrl}${this.KEYUrl}${this.symbolUrl}${codigo}`
    console.log('URL API ', url)
    return this.http.get(url).pipe(tap(x => (console.log(x))))
  }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


}
