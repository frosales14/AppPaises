import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  paises : Country[] = [];
  termino: string    = ''
  error  : boolean   = false;

  constructor(private _paisService: PaisService) { }

  buscar( region: string ){
    this.termino = region;
    this.error   = false;
    
    this._paisService.buscarRegion( this.termino )
        .subscribe( region => {
          this.paises = region
        },
        err => {
          this.paises = [];
          this.error = true;
        });
    
  }

}
