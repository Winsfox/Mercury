export class Datatable {
    public columns: string[];
    public rows: string[][];

    constructor(columns: string[], rows: string[][])
    {
        this.columns = columns;
        this.rows = rows;
    }
}