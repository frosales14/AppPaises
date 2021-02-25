import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorNombreComponent } from './pages/por-nombre/por-nombre.component';



@NgModule({
  declarations: [
    PorNombreComponent, 
    PorRegionComponent, 
    PorCapitalComponent, 
    VerPaisComponent
  ],
  exports: [
    PorNombreComponent, 
    PorRegionComponent, 
    PorCapitalComponent, 
    VerPaisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisModule { }
