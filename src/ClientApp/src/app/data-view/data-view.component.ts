import { Component } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Datatable } from '../models/datatable';
import { } from 'ag-grid-community';

@Component({
    selector: 'data-view-comp',
    templateUrl: './data-view.component.html',
    styleUrls: ['./data-view.component.css']
})
export class DataViewComponent {
    public datatable: Datatable;
    columnDefs = [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'}
    ];

    rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
    ];

    constructor(private httpClient: HttpClient)
    {   
        httpClient.get('api/Test/GetTable/1')
              .subscribe(data => 
                {
                    this.datatable = JSON.parse(data.toString());
                }
            );            
    }
}