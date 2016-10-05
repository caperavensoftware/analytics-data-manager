export class Grouping implements  IGrouping {
    field: string;
    display: string;
    parent: IGrouping;

    constructor(field: string, display: string, parent?: IGrouping) {
        this.field = field;
        this.display = display;
        this.parent = parent;
    }
}

export class Groupings implements IGroupings {
    groupings: Array<IGrouping>;

    constructor() {
        this.groupings = Array<IGrouping>();
    }

    add(item: IGrouping) {
        this.groupings.push(item);
    }

    insert(item: IGrouping, index: Number) {
    }

    remove(item: IGrouping) {
    }

    removeAt(index: Number) {
    }

    move(fromIndex: Number, toIndex: Number) {
    }
}