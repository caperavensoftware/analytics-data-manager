import {bindable} from 'aurelia-framework';
import {AnalyticalDataManager} from './../../analytical/analytical-data-manager';
import {OrderGroupItem} from "../../analytical/ordered-groups";

declare var fetch;

export class Welcome {
    @bindable data;
    @bindable analytical;

    constructor() {
        this.analytical = new AnalyticalDataManager();

        fetch('data/assets.json')
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
               this.data = json.data
            }.bind(this));
    }

    dataChanged() {
        this.analytical.data = this.data;
    }

    doFunction1() {
        const assetTypeIdGrouping = new OrderGroupItem("asset_type_id", "Asset Type Id", null);
        this.analytical.groupingOrder.add(assetTypeIdGrouping);
        const assetTypeIdCollection = this.analytical.getGroupingData(assetTypeIdGrouping, this.data);
    }
}