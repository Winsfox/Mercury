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

    constructor(private httpClient: HttpClient) {}

    ngOnInit() {
        this.httpClient.get('api/Loaders/GetTable/1')
              .subscribe(data => 
                {
                    this.datatable = JSON.parse(data.toString());
                }
            );           
    }
}