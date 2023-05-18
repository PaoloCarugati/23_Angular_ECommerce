import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScarpeComponent } from './scarpe/scarpe.component';
import { MaglietteComponent } from './magliette/magliette.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; //Importa Il modulo http


@NgModule({
  declarations: [
    AppComponent,
    ScarpeComponent,
    MaglietteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
