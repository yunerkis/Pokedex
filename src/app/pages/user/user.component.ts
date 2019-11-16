import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent{

  msj: string;
  user: any = [];
  usercopy: any = [];

  constructor(
  ) { }

  onClickSubmit(formData) {
    this.user = JSON.parse(localStorage.getItem('userList'));
    if (formData.update != null) {
      if (formData.password !== formData.passwordrepeat) {
        this.msj = 'contraseña no coincide';
      } else {
        this.usercopy = this.user.filter( e => e.id === formData.id);
        const newUser = { 
          id: formData.id,
          name: formData.name,
          password: formData.password
        };
        this.usercopy.push(newUser);
        this.user = JSON.stringify(this.user);
        localStorage.setItem('userList', this.user);
      }
    }
  }
}
