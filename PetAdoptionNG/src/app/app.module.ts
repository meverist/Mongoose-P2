import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PetViewComponent } from './component/pet-view/pet-view.component';
=======
import { UserregisterComponent } from './components/userregister/userregister.component';
>>>>>>> da0cc0653a26b0ddb6b0e796817f966b4d810307

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PetViewComponent
=======
    UserregisterComponent,
>>>>>>> da0cc0653a26b0ddb6b0e796817f966b4d810307
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
