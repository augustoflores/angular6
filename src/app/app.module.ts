import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RetirarComponent } from './retirar/retirar.component';
import { DepositarComponent } from './depositar/depositar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { IndiceComponent } from './indice/indice.component';

@NgModule({
  declarations: [
    AppComponent,
    RetirarComponent,
    DepositarComponent,
    RegistrarComponent,
    ConsultarComponent,
    NuevoComponent,
    IndiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
