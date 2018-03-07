import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bbl-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombre: string;
  @Output() respuesta: EventEmitter<string>;
  miNombre: string;

  constructor() {
    this.respuesta = new EventEmitter();    // un caso en el que es imprescindible usar el construtor.
  }

  ngOnInit() {

  }

  btnRespuesta() {
    this.respuesta.emit(this.miNombre);
  }

}
