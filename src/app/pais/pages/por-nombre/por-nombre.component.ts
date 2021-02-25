import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-nombre',
  templateUrl: './por-nombre.component.html',
  styles: [
  ]
})
export class PorNombreComponent {

  termino: string    = '';
  error  : boolean   = false;
  paises : Country[] = []
  
  constructor( private _paisService: PaisService ) { }

  buscar() {
    this.error = false;
    this._paisService.buscarPais(this.termino)
        .subscribe( pais => {
          console.log( pais );
          this.paises = pais;
        },
        err => {
          this.error  = true;
          this.paises = []
        });    
  }
}
