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
        if (fromIndex < 0) {
            throw new Error('from index must be greater or equal to zero');
        }

        const endIndex = this.groupings.length -1;

        if (toIndex > endIndex) {
            throw new Error(`index ${toIndex} is not in the range of the groupings`);
        }

        if (endIndex < 1) {
            // nothing to move, either the list is empty or it only has one item in it.
            return false;
        }

        // 1. get item to be moved.
        const fromItem = this.groupings[fromIndex];

        // 2. remove item from array.
        this.groupings.splice(fromIndex, 1);

        // 3. add item into new place.
        this.groupings.splice(toIndex, 0, fromItem);

        // 4. re-index items
        if (fromIndex > 0) {
            this.groupings[fromIndex].parent = this.groupings[fromIndex - 1];
        }

        if (toIndex > 0) {
            this.groupings[toIndex].parent = this.groupings[toIndex - 1];
        }

        this.groupings[toIndex + 1].parent = this.groupings[toIndex];
    }
}