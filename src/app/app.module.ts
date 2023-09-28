import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { GastoComponent } from './gasto/gasto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { GastoServicio } from './gasto/gasto.servicio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    IngresoComponent,
    GastoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoServicio, GastoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
