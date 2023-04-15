import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: "", component: BienvenidaComponent},
  { path: "bienvenido", component: BienvenidaComponent},
  { path: "error", component: ErrorComponent},
  { path: "login", component: LoginComponent},
  { path: "registro", component: RegisterComponent},
  { path: "**", component: ErrorComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
