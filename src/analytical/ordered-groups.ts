export class OrderGroupItem implements  IOrderGroupItem {
    field: string;
    display: string;
    parent: IOrderGroupItem;

    constructor(field: string, display: string, parent?: IOrderGroupItem) {
        this.field = field;
        this.display = display;
        this.parent = parent;
    }
}

export class OrderGroup implements IOrderedGroup {
    groupings: Array<IOrderGroupItem>;

    constructor() {
        this.groupings = new Array<IOrderGroupItem>();
    }

    add(item: IOrderGroupItem) {
        item.parent = null;

        this.groupings.push(item);

        const index = this.groupings.length - 1;
        if (index > 0) {
            this.groupings[index].parent = this.groupings[index - 1];
        }
    }

    insert(item: IOrderGroupItem, index: number) {
        if (index > this.groupings.length) {
            throw new Error(`index ${index} is not in the range of the groupings`);
        }

        this.groupings.splice(index, 0, item);
        this.groupings[index].parent = this.groupings[index - 1];
        this.groupings[index + 1].parent = this.groupings[index];
    }

    remove(item: IOrderGroupItem) {
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

    clear() {
        for(let item of this.groupings) {
            item.parent = null;
        }

        this.groupings = new Array<IOrderGroupItem>();
    }
}