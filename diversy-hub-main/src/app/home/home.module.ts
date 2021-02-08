import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VagasComponent } from './vagas/vagas.component';
import { HomeRoutingModule } from './home-routing.module';
import { MentoriasComponent } from './mentorias/mentorias.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { OngsComponent } from './ongs/ongs.component'



@NgModule({
  declarations: [NavBarComponent, VagasComponent, MentoriasComponent, EmpresasComponent, OngsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
