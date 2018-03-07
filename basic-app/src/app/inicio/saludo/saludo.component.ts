import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {

  sNombre: string;
  user: any;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Luisongue';
    this.user = {name: this.sNombre};
  }

  btnBorrar () {
    this.sNombre = '';
  }

}
