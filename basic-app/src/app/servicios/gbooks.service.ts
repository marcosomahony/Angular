import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';

@Injectable()
export class GbooksService {

  aLibros: Array<string>;
  urlBase: string;
  constructor(public http: HttpClient) {
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  getLibros(clave: string): any {
    this.aLibros = [];
    const url = this.urlBase + clave;

    return this.http.get(url).toPromise()
      .then(
        (response: any) => {                          // esto mejor ecapsularlo en una funcion 'privada' procesadatos()
          console.log(response);
          response.items.forEach(element => {
            this.aLibros.push(element.volumeInfo.title);
          });
          // tslint:disable-next-line:no-shadowed-variable
          return new Promise((resolve, reject) => {
            resolve(this.aLibros);
          });
        }
      );
  }

  getLibrosBasic(clave: string): any {
    this.aLibros = [];
    const url = this.urlBase + clave;

    return this.http.get(url).toPromise();
  }

}
