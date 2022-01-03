import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;

    }
    `
  ]
})
export class PorRegionComponent implements OnInit {


  paises: Country[] = [];

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionesV2: string[] = ['EU', 'EFTA', 'CARICOM', 'PA',  'AU',  'USAN', 'EEU',
                          'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  regionActivaV2: string = '';

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCSS ( region: string ) {
    return ( region === this.regionActiva ) 
              ? 'btn btn-primary' 
              : 'btn btn-outline-primary';
  }

  getClaseCSSV2 ( region: string ) {
    return ( region === this.regionActivaV2 ) 
              ? 'btn btn-primary' 
              : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {

    if ( region === this.regionActiva ) return;
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarPorRegion( this.regionActiva )
    .subscribe(  ( resp ) => {
      console.log( resp );

      this.paises = resp; 
     
      });
  }

  activarRegionV2( region: string ) {
    this.regionActivaV2 = region;

    // this.paisService.buscarPorRegionV2( this.regionActiva )
    // .subscribe(  ( resp ) => {
    //   console.log( resp );

    //   this.paises = resp; 
     
    //   });
  }


}
