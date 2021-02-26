import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-nombre',
  templateUrl: './por-nombre.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorNombreComponent {

  termino: string    = '';
  error  : boolean   = false;
  paises : Country[] = []
  
  sugerencias    : Country[] = []
  mostrarSugerido: boolean   = false;

  constructor( private _paisService: PaisService ) { }

  buscar( termino: string ) {
    this.error  = false;
    this.termino = termino;
    
    this.mostrarSugerido = false;
    
    this._paisService.buscarPais(this.termino)
        .subscribe( pais => {
          this.paises = pais;
        },
        err => {
          this.error  = true;
          this.paises = []
        });    
  }

  sugerencia( termino: string) {
    this.mostrarSugerido = true;
    if( !termino ) this.mostrarSugerido = false;
    
    this.error = false;
    this.termino = termino;

    this._paisService.buscarPais( termino )
        .subscribe( pais => {
          this.sugerencias = pais.splice(0,5);
        },
        err => {
          this.sugerencias = [];
        });
  }
}
