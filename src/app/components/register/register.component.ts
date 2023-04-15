import { Component } from '@angular/core';
import { User } from "../../models/User";
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  username = '';
  password= '';
  passwordConf= '';
  constructor(private router: Router){ }
  register(){
   if(this.password === this.passwordConf){
    this.loadLocalStorage({
      nombre: this.username,
      clave: this.password
    });
    alert('Successfully Registered.')
    this.router.navigate(['/bienvenido']);
    return;
   } 
   this.router.navigate(['/error']);
  }
  loadLocalStorage(user : User){
      localStorage.setItem(user.nombre, user.clave);
  }
}
