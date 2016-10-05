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
        item.parent = null;

        this.groupings.push(item);

        const index = this.groupings.length - 1;
        if (index > 0) {
            this.groupings[index].parent = this.groupings[index - 1];
        }
    }

    insert(item: IGrouping, index: number) {
        if (index > this.groupings.length) {
            throw new Error(`index ${index} is not in the range of the groupings`);
        }

        this.groupings.splice(index, 0, item);
        this.groupings[index].parent = this.groupings[index - 1];
        this.groupings[index + 1].parent = this.groupings[index];
    }

    remove(item: IGrouping) {
        const index = this.groupings.indexOf(item);
        this.removeAt(index);
    }

    removeAt(index: number) {
        this.groupings[index].parent = null;
        this.groupings.splice(index, 1);

        if (this.groupings.length > 0 && index > 0) {
            this.groupings[index].parent = this.groupings[index - 1];
        }
    }

    move(fromIndex: number, toIndex: number) {
    }
}