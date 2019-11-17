import { Component } from '@angular/core'

@Component({
    selector: 'loaders-comp',
    templateUrl: './loaders.component.html',
    styleUrls: ['./loaders.component.css']
})
export class LoadersComponent {
    public loaders: string[]; 

    constructor()
    {
        this.loaders = ['Загрузчик 1', 'Загрузчик 2', 'Загрузчик 3'];
    }
}