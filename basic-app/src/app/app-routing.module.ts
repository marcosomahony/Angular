import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },           // cuando hace click en inicio carga... inicio
  { path: 'about', component: AboutComponent },
  { path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule' },
  { path: 'comunics', loadChildren: './comunics/comunics.module#ComunicsModule' },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },  // default: carga inicio

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
