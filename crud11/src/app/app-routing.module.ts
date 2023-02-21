import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { SignupComponent } from './shared/components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', loadChildren: () => import ("./admin/admin.module").then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
