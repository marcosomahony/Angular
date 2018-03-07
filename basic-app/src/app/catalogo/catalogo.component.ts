import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-catalogo',
  template: `
    <p>
      catalogo works and is a Lazy Component! JAJA!
    </p>
  `,
  styles: []
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
