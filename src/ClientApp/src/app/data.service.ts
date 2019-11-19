import { Loader } from './models/loader';

export class DataService {
    private loaders: Loader[] = [
        {"id": 1, "name": "Loader 1"}, 
        {"id": 2, "name": "Loader 2"},
        {"id": 3, "name": "Loader 3"},
        {"id": 4, "name": "Loader 4"}
    ];

    public getLoaders(): Loader[]
    {
        return this.loaders;
    }
}