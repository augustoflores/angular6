import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';              
import { RetirarComponent } from './retirar/retirar.component';
import { DepositarComponent } from './depositar/depositar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { IndiceComponent } from './indice/indice.component';

const routes: Routes = [
  {
    path: '', // ruta raíz
    component: IndiceComponent
  },
  {
    path: 'consultar', // ruta raíz
    component: ConsultarComponent
  },
  {
    path: 'registrar', // se accesa /otra-ruta
    component: RegistrarComponent 
  },
  {
    path: 'depositar', // se accesa /otra-ruta
    component: DepositarComponent 
  },
  {
    path: 'retirar', // se accesa /otra-ruta
    component: RetirarComponent 
  },
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
