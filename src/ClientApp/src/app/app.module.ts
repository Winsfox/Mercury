import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { LoadersComponent } from './loaders/loaders.component';
import { DataViewComponent } from './data-view/data-view.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, AgGridModule.withComponents(null)],
    declarations: [AppComponent, LoadersComponent, DataViewComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }