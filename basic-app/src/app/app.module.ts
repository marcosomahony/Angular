import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { InicioModule } from './inicio/inicio.module';
import { AboutModule } from './about/about.module';
import { TruncarPipe } from './pipes/truncar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TruncarPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    InicioModule,
    AboutModule
  ],
  exports: [
    TruncarPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
