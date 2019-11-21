import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IncomeDataComponent } from './income-data/income-data.component'
import { DataService } from './data.service'
 
@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    // Дочерний компонент: IncomeDataComponent
    @ViewChild(IncomeDataComponent, {static: false}) 
    private incomeDataComponent: IncomeDataComponent;

    // Конструктор
    constructor(private dataService: DataService) {}

    // Код состояния оторбажения
    public visibleState: number = 0;

    // Выбран загрузчик
    public onLoaderSelected(loaderId: number){
        console.log("Выбран загрузчик:" + loaderId);
        this.visibleState = 1;

        // Передаем в компонент отображения входных данных инфромацию об выбранном загрузчике
        setTimeout(() => this.incomeDataComponent.update(loaderId));        
    }

    // Выбрана набор данных
    public onIncomeDataSelected(incomeDataId: number){
        console.log("Выбран набор данных:" + incomeDataId);
        this.visibleState = 2;
    }
}