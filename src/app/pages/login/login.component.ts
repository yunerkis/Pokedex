import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  regex = /^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Z]{2,}[A-Za-z\d$@$!%*?&]{8,}/;

  public isShown = false;

  constructor(private router: Router) {}

  edited = true;
  user: any = [];
  msj: string;

  registerUser() {
    this.edited = false;
    this.msj = '';
  }

  onClickSubmit(formData) {
    if (formData.register) {
      console.log(this.regex.test(formData.password));
      if (localStorage.getItem('userList') == null) {
        if (this.regex.test(formData.password)) {

          if (formData.password !== formData.passwordrepeat) {
            this.msj = '* password does not match';
          } else {
            const newUser = { 
              id: Math.random(),
              name: formData.name,
              user: formData.register,
              password: formData.password
            };
            this.user.push(newUser);
            this.user = JSON.stringify(this.user);
            localStorage.setItem('userList', this.user);
            this.toggleShow();
          }
        } else {
          this.msj = '* must have at least 8 characters, two uppercase letters, a special character, a number.';
        }
      } else {
        this.user = JSON.parse(localStorage.getItem('userList'));
        if (formData.password !== formData.passwordrepeat) {
          this.msj = '* password does not match';
        } else {
          const newUser = { 
            name: formData.name,
            user: formData.register,
            password: formData.password
          };
          this.user.push(newUser);
          this.user = JSON.stringify(this.user);
          localStorage.setItem('userList', this.user);
          this.toggleShow();
        }
      }
    } else if (formData.user) {
      if (localStorage.getItem('userList') != null) {
        this.user = JSON.parse(localStorage.getItem('userList'));
        if (this.user.find(e => e.user === formData.user && e.password === formData.password)) {
          localStorage.setItem('token', '653iehyugfyu3gfhiuyf');
          this.router.navigate(['home']);
        } else {
          this.msj = 'user not found';
        }
      } else {
        this.msj = 'user not found';
      }
    }
  }

  public toggleShow() {
    this.isShown = ! this.isShown;
    this.msj = '';
  }
}