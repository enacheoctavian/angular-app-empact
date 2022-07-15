import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from "@angular/material/expansion";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatPaginatorModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
