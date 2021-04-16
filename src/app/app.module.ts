import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudComponent } from './cloud/cloud.component';
import {TagCloudModule} from 'angular-tag-cloud-module';

@NgModule({
  declarations: [
    AppComponent,
    CloudComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TagCloudModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
