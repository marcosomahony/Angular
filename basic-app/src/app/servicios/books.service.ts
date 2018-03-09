import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable()
export class BooksService {

  aLibros: Array<string>;
  constructor() {
    this.aLibros = [
      'Angular Avanzadisimo',
      'Angular Retrasado',
      'Cristo Ninja',
      'EeEeEeEe'
    ];
   }

   getLibros(clave: string) {
    return this.aLibros;
   }

   getLibrosAsync(clave: string) {
     return new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve(this.aLibros);
      }, 4000 );
     });
   }

}
