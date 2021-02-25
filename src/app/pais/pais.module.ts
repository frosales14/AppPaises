import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';
import { PaisInputComponent } from './pages/components/pais-input/pais-input.component';
import { PaisTablaComponent } from "./pages/components/pais-tabla/pais-tabla.component";



@NgModule({
  declarations: [
    PorNombreComponent, 
    PorRegionComponent, 
    PorCapitalComponent, 
    VerPaisComponent, 
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports: [
    PorNombreComponent, 
    PorRegionComponent, 
    PorCapitalComponent, 
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisModule { }
