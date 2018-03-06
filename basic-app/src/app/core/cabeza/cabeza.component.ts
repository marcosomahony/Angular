import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'bbl-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit, OnDestroy {
  public title: string;
  constructor() { }

  ngOnInit () {
    // todas las variables del constructor nos las llevamos aqui y nos quitamos de problemas de carga de DOM
    this.title = 'Blablebl';
  }

  ngOnDestroy () {
  }

}
