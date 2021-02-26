import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';


  get httpParams() {
    return new HttpParams().set('fields','name;capital;flag;alpha2Code;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(pais: string): Observable<Country[]> {
    const url: string = `${this._apiUrl}/name/${pais}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  } 

  buscarCapital( capital: string ): Observable<Country[]> {
    const url: string = `${this._apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisCodigo( id: string): Observable<Country> {
    return this.http.get<Country>(`${this._apiUrl}/alpha/${id}`);
  }

  buscarRegion( region: string): Observable<Country[]> {
    const url: string = `${this._apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
}
