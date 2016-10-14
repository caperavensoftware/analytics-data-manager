export class RecordBase {
    public isSelected : boolean;
    public data: any;

    constructor(model: any) {
        this.data = model;
        this.isSelected = false;
    }
}

export class GroupingRecord extends RecordBase {
    public value: string;

    // children can be grouping or data records
    public children: Array<any>;
}

export class DataRecord extends RecordBase {
}