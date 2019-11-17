import { Component } from '@angular/core';
import { Datatable } from './models/datatable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html'
})
export class AppComponent { 

    public datatable: Datatable;
    public serverDatatable: any;
    public x: any;

    constructor(private httpClient: HttpClient)
    {

        let columns = ['Колонка 1', 'Колонка 2'];
        let rows = [['Строка 1', 'Строка 1'], ['Строка 2', 'Строка 2']];
  
        let datatable = new Datatable(columns, rows);
        this.datatable = datatable;

        var jsonString = JSON.stringify(datatable);
        
        console.log(jsonString);

        httpClient.get('api/Test/GetTable/1')
              .subscribe(data => 
                {
                    this.serverDatatable = data;
                    this.x = data;
                    console.log("хуй");
                    console.log(data);
                    this.datatable = JSON.parse(data.toString());
                }
            );
    }
}