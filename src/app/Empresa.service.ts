import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private empresaUrl = 'api/empresas';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.empresaUrl)
      .pipe(
        tap(_ => ('fetched heroes')),
        catchError(this.handleError<Empresa[]>('getHeroes', []))
      );
  }
  getEmpresa(id: string): Observable<Empresa> {
    const url = `${this.empresaUrl}/${id}`;
    return this.http.get<Empresa>(url).pipe(
      tap(_ => (`fetched hero id=${id}`)),
      catchError(this.handleError<Empresa>(`getHero id=${id}`))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  searchHeroes(term: string): Observable<Empresa[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Empresa[]>(`${this.empresaUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         (`found heroes matching "${term}"`) :
         (`no heroes matching "${term}"`)),
      catchError(this.handleError<Empresa[]>('searchHeroes', []))
    );
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


}
