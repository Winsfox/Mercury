import { Loader } from './models/loader';
import { IncomeData } from './models/income-data';

export class DataService {
    private loaders: Loader[] = [
        {"id": 1, "name": "Loader 1"}, 
        {"id": 2, "name": "Loader 2"},
        {"id": 3, "name": "Loader 3"},
        {"id": 4, "name": "Loader 4"}
    ];

    private incomeDataList: IncomeData[] = [
        {"id": 1, "date": new Date(2019, 11, 1), "status": 1 },
        {"id": 2, "date": new Date(2019, 11, 2), "status": 1 },
        {"id": 3, "date": new Date(2019, 11, 3), "status": 1 }
    ];

    public getLoaders(): Loader[]
    {
        return this.loaders;
    }

    public getIncomeDataList(idLoader: number): IncomeData[] {
        return this.incomeDataList;
    }

    // Состояние
    public state: number = 0;
}