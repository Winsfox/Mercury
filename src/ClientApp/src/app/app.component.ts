import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    //@ViewChild(ChildComponent) private myChild: ChildComponent;

    // Выбран загрузчик
    onLoaderSelected(id: number){
        console.log("Выбран загрузчик:" + id);
    }
}