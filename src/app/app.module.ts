import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetEnteredNumberComponent } from './pages/get-entered-number/get-entered-number.component';

@NgModule({
  declarations: [
    AppComponent,
    GetEnteredNumberComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
