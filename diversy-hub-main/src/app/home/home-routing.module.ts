import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagasComponent } from './vagas/vagas.component';
import { MentoriasComponent } from './mentorias/mentorias.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { OngsComponent } from './ongs/ongs.component';

const routes: Routes = [
  {path: 'home', component: VagasComponent},
  {path: '', component: MentoriasComponent},
  {path: '', component: EmpresasComponent},
  {path: '', component: OngsComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
