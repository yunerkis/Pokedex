import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PokemonService } from './pokemon.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { StatusComponent } from './pages/status/status.component';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    StatusComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
