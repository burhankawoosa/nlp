import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Sharedcomponents/header/header.component';
import { FooterComponent } from './Sharedcomponents/footer/footer.component';
import { Nlplvl1Component } from './MainComponents/nlplvl1/nlplvl1.component';
import { Nlplvl2Component } from './MainComponents/nlplvl2/nlplvl2.component';
import { Nlplvl3Component } from './MainComponents/nlplvl3/nlplvl3.component';
import { Nlplvl4Component } from './MainComponents/nlplvl4/nlplvl4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Nlplvl1Component,
    Nlplvl2Component,
    Nlplvl3Component,
    Nlplvl4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
