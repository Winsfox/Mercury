import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }   from './app.component';
import { LoadersComponent } from './loaders/loaders.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule ],
    declarations: [ AppComponent, LoadersComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }