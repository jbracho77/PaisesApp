import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  verSugerencias: boolean = false;
  
  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.verSugerencias = false;

    this.paisService.buscarPais( this.termino )
      .subscribe(  ( resp ) => {
        console.log( resp );

        this.paises = resp; 
       
        }, ( err ) => {
        this.hayError = true;
        this.paises = [];
      });

  }

  mostrarSugerencias( termino: string ) {
    this.hayError = false;
    this.verSugerencias = true;
    this.termino = termino
    
    this.paisService.buscarPais( termino )
      .subscribe( 
        resp => this.paisesSugeridos = resp.splice( 0, 5 ),
        ( err ) =>  this.paisesSugeridos = [] );

  }

  buscarSugerencia( termino: string ) {
    this.buscar( termino );
  }

}
