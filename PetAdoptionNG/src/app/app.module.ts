import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmployeeAddPetComponent } from './components/employee-add-pet/employee-add-pet.component';
import { UserregisterComponent } from './components/userregister/userregister.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddPetComponent,
    UserregisterComponent,
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
