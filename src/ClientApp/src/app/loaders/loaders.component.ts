import { Component, Output, EventEmitter } from '@angular/core'
import { Loader } from '../models/loader'
import { DataService } from '../data.service'

@Component({
    selector: 'loaders-comp',
    templateUrl: './loaders.component.html',
    styleUrls: ['./loaders.component.css']
})
export class LoadersComponent {
    // Коллекция загрузчиков
    public loaders: Loader[]; 

    // Событие выбора определенного загрузчика
    @Output() onSelected = new EventEmitter<number>();

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.loaders = this.dataService.getLoaders();
    }    

    // Выбор загрузчика
    public select(id: number) {
        console.log(id);

        // Обновляем состояние (выбран загрузчик)
        this.dataService.state = 1;

        this.onSelected.emit(id);
    }
}