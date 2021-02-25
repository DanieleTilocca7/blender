import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsCardComponent } from './models/models-card/models-card.component';
import { ModelsListComponent } from './models/models-list/models-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BlenderService } from './services/blender.service';

@NgModule({
  declarations: [	
    AppComponent,
    ModelsCardComponent,
    ModelsListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BlenderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
