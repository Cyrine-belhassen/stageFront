import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTemplateComponent } from './user-template/user-template.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserBodyComponent } from './user-body/user-body.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTemplateComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
