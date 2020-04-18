import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';
import { EmployeeAddPetComponent } from './components/employee-add-pet/employee-add-pet.component';
import { PetViewComponent } from './components/pet-view/pet-view.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { ViewApplicationsComponent } from './components/view-applications/view-applications.component';
import { AdopScreenComponent } from './components/adop-screen/adop-screen.component';
import { EmplscreenComponent } from './components/empl-screen/emplscreen.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AccountComponent } from './components/account/account.component';


const routes: Routes = [
  {path: 'create-application', component: CreateApplicationComponent},
  {path: 'employee-add-pet', component: EmployeeAddPetComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pet-view', component: PetViewComponent},
  {path: 'userregister', component: UserregisterComponent},
  {path: 'view-applications', component: ViewApplicationsComponent},
  {path: 'adop-screen', component: AdopScreenComponent},
  {path: 'empl-screen', component: EmplscreenComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'account', component: AccountComponent},
  {path: '', redirectTo: '/welcome', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
