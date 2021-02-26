import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais(pais: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this._apiUrl}/name/${pais}`);
  }

  buscarCapital( capital: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this._apiUrl}/capital/${capital}`);
  }

  getPaisCodigo( id: string): Observable<Country> {
    return this.http.get<Country>(`${this._apiUrl}/alpha/${id}`);
  }

  buscarRegion( region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this._apiUrl}/region/${region}`);
  }
}
