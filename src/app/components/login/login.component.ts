import { Component } from '@angular/core';
import { User } from "../../models/User";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = new User;
  constructor(private router: Router){ }

  login(){
    if(this.usuario.nombre !== '' && this.usuario.clave !== '')
    {
      var value = localStorage.getItem(this.usuario.nombre);
      console.log(localStorage);
      console.log(value);
      console.log(this.usuario);
      if(value !== null && value == this.usuario.clave){
        this.router.navigate(['/bienvenido']);
        return;
      }
      alert("Wrong Data");
      return;
    }
    alert("Missing Field");
    return;
  }
}
