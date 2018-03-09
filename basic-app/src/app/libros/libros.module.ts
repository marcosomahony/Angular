import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../servicios/books.service';
import { FormsModule } from '@angular/forms';
import { LibrosBuscarComponent } from './libros-buscar/libros-buscar.component';
import { HttpClientModule } from '@angular/common/http';
import { GbooksService } from '../servicios/gbooks.service';
import { LibrosByServiceComponent } from './libros-by-service/libros-by-service.component';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [LibrosComponent, LibrosBuscarComponent, LibrosByServiceComponent],
  providers: [BooksService, GbooksService],
  exports: [LibrosComponent]
})
export class LibrosModule { }
