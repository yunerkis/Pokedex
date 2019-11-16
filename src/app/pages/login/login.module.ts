import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';

import { LoginComponent} from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormControl,
    FormGroup,
    Validators,
    FormsModule
  ],
  exports:[
    LoginComponent
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
