import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  paises: Country[] = [];

  constructor( private activateRoute: ActivatedRoute,
               private paisService: PaisService ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.buscarPorCodigo( id ) ),
        tap( console.log )
      )
      .subscribe( resp => this.paises = resp )


    // this.activateRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log( id );

    //     this.paisService.buscarPorCodigo( id )
    //       .subscribe(  ( resp ) => {
    //         console.log( resp );

    //         //this.paises = resp; 
          
    //       });
    //   });
    
  }

}
