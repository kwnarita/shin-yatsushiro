import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    AppComponent, ContentComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, Ng2BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
