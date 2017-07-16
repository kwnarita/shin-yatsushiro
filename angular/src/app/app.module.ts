import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [
    AppComponent, ContentComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, Ng2BootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
