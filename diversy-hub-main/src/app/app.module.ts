import { AuthRoutingModule } from './auth/auth-routing.module';
import { MaterialModule } from './material.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthRoutingModule,
    HttpClientModule,
    HomeModule
  ],
  exports:[
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
