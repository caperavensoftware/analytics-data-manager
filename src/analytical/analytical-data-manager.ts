import {GroupingOrder} from "./grouping-order";
import {SortingOrder} from "./sorting-order";

export class AnalyticalDataManager {
    groupingOrder: GroupingOrder;
    sortingOrder: SortingOrder;

    constructor() {
        this.groupingOrder = new GroupingOrder();
        this.sortingOrder = new SortingOrder();
    }
}