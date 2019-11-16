import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { StatusComponent } from './pages/status/status.component';


  const routes: Routes = [
    { path: 'home',                                                component: HomeComponent,    canActivate: [AuthGuardService] },
    { path: 'user',                                                component: UserComponent,    canActivate: [AuthGuardService] },
    { path: 'status/:id',                                              component: StatusComponent,  canActivate: [AuthGuardService] },
    { path: 'login',                                               component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }