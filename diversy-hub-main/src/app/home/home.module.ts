import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VagasComponent } from './vagas/vagas.component';
import { HomeRoutingModule } from './home-routing.module'



@NgModule({
  declarations: [NavBarComponent, VagasComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
