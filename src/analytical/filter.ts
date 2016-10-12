import {GroupingOrder} from "./grouping-order";
export enum FilterOperator {
    equals
}

export class FilterItem {
    field: string;
    value: any;

    constructor(field: string, value: any) {
        this.field = field;
        this.value = value;
    }

    evaluate(model: any): boolean {
        return true;
    }
}

export class EqualsFilterItem extends FilterItem {
    evaluate(model: any) {
        return model[this.field] == this.value;
    }
}

export class Filter {
    filterItems: Array<FilterItem>;

    constructor() {
        this.filterItems = [];
    }

    add(filterItem: FilterItem) {
        this.filterItems.push(filterItem);
    }

    allow(model: any): boolean {
        // If there is no filter items allow everything
        if (this.filterItems.length === 0) {
            return true;
        }

        // If there are filters, return true unless one of them failed
        for(let filterItem of this.filterItems) {
            if (!filterItem.evaluate(model)) {
                return false;
            }
        }

        return true;
    }

    initFromGroupingOrder(groupingOrder: GroupingOrder) {
        
    }
}
