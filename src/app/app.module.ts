import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MessageComponent } from './entity/message/message.component';
import { FileComponent } from './entity/file/file.component';
import { HomeComponent } from './entity/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MaterialModule } from './shared/material/material';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    FileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
