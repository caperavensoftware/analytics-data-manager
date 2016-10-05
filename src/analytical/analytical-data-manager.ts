import {GroupingOrder} from "./grouping-order";
import {SortingOrder} from "./sorting-order";

export class AnalyticalDataManager {
    groupingOrder: GroupingOrder;
    sortingOrder: SortingOrder;
    data: Array<any>;

    constructor() {
        this.groupingOrder = new GroupingOrder();
        this.sortingOrder = new SortingOrder();
    }

    setData(data: Array<any>) {
        this.data = data;
        
        if (this.data.length > 0) {
            const model = this.data[0];

            this.groupingOrder.validateFromModel(model);
            this.sortingOrder.validateFromModel(model);
        }
    }
}