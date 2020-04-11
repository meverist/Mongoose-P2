import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';



import { PetViewComponent } from './components/pet-view/pet-view.component';



import { EmployeeAddPetComponent } from './components/employee-add-pet/employee-add-pet.component';

import { ViewApplicationsComponent } from './components/view-applications/view-applications.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';

import { UserregisterComponent } from './components/userregister/userregister.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,


    PetViewComponent,

    UserregisterComponent,



    EmployeeAddPetComponent,
    UserregisterComponent,

    ViewApplicationsComponent,
    CreateApplicationComponent,
    UserregisterComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
