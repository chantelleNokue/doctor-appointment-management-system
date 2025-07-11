import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { DescriptionComponent } from './description/description.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
;



const routes: Routes = [
  { path: "signup", component: SignupComponent},
  { path: "login", component: LoginComponent},
  { path: "description", component: DescriptionComponent},
  { path: "appoinments/:id", component: AppoinmentsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
