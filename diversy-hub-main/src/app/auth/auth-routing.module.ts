import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrocvComponent } from './cadastrocv/cadastrocv.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: CadastrocvComponent},
  {path: 'cadastrar', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
