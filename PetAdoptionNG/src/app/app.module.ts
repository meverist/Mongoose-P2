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
<<<<<<< HEAD
import { NavbarComponent } from './components/navbar/navbar.component';
=======
import { LoginComponent } from './components/login/login.component';
import { AdopScreenComponent } from './components/adop-screen/adop-screen.component';
import { EmplscreenComponent } from './components/empl-screen/emplscreen.component';
>>>>>>> f245883fcf5be21e0114b3dd67093d1c43742642

import { HttpClientModule } from '@angular/common/http';
import { LogInService } from './services/log-in.service';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    PetViewComponent,
    UserregisterComponent,
    EmployeeAddPetComponent,
    ViewApplicationsComponent,
    CreateApplicationComponent,
<<<<<<< HEAD
    UserregisterComponent,
    NavbarComponent

=======
    LoginComponent,
    AdopScreenComponent,
    EmplscreenComponent,
    WelcomeComponent
>>>>>>> f245883fcf5be21e0114b3dd67093d1c43742642
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
