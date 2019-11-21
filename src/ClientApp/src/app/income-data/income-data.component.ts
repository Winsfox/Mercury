import { Component, Output, EventEmitter } from '@angular/core';
import { IncomeData } from '../models/income-data';
import { DataService } from '../data.service'

@Component({
    selector: 'income-data-comp',
    templateUrl: './income-data.component.html'
})
export class IncomeDataComponent {
    // Коллекция входных данных
    public incomeDataList: IncomeData[];

    // Событие выбора определенного загрузчика
    @Output() onSelected = new EventEmitter<number>();

    constructor(private dataService: DataService) {}  

    public update(loaderId: number) {
        console.log("Обновляем список входных данных для загрузчика " + loaderId);
        this.incomeDataList = this.dataService.getIncomeDataList(loaderId);
    }

    public select(id: number) {
        console.log("Выбрали входные данные" + id);
        this.onSelected.emit(id);
    }
}