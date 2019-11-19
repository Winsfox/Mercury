import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service'

import { AppComponent } from './app.component';
import { LoadersComponent } from './loaders/loaders.component';
import { DataViewComponent } from './data-view/data-view.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, LoadersComponent, DataViewComponent],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }