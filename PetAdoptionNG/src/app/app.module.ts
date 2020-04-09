import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewApplicationsComponent } from './components/view-applications/view-applications.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewApplicationsComponent,
    CreateApplicationComponent
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
