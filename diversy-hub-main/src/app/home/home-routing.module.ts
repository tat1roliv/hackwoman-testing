import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagasComponent } from './vagas/vagas.component'

const routes: Routes = [
  {path: '', component: VagasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
