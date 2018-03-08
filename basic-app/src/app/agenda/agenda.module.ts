import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';
import { TareasComponent } from './tareas/tareas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AgendaRoutingModule,
    FormsModule
  ],
  declarations: [AgendaComponent, TareasComponent],
  exports: [AgendaComponent]
})
export class AgendaModule { }
