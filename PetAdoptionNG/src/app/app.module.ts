import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { UserregisterComponent } from './components/userregister/userregister.component';
=======
import { ViewApplicationsComponent } from './components/view-applications/view-applications.component';
>>>>>>> 1641dcf64e5a04dae996c4df68ca5e7dddc16363

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserregisterComponent,
=======
    ViewApplicationsComponent
>>>>>>> 1641dcf64e5a04dae996c4df68ca5e7dddc16363
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
