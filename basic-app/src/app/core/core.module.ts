import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PieComponent,
    CabezaComponent,
    LogoComponent,
    MenuComponent],
  exports: [
    PieComponent,
    CabezaComponent,
    MenuComponent]
})
export class CoreModule { }
