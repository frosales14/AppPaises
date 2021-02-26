import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private _paisService: PaisService) { }

  termino: string = '';
  error  : boolean = false; 
  
  paises: Country[] = []; 

  buscar( capital: string ) {
    this.error = false; 
    this.termino = capital;
    
    this._paisService.buscarCapital( this.termino )
        .subscribe( capital => {
          this.paises = capital;
        },
        err => {
          this.error  = true;
          this.paises = [];
        })
  }
}
