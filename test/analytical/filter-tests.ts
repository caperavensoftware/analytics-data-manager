import {expect} from 'chai';
import {FilterOperator, Filter, FilterItem} from '../../src/analytical/filter';

describe('GroupingOrder Tests', function() {
    var filter;

    beforeEach(function() {
        filter = new Filter()
    });

    it('constructor', function() {
        expect(Filter).to.not.be.null;
    });
});

describe('FilterItem Tests', function() {
    var filterItem;

    beforeEach(function() {
        filterItem = new FilterItem("Field1", "Value1");
    });

    it('constructor', function() {
        expect(filterItem).to.not.be.null;
        expect(filterItem.field).to.be.equal("Field1", "filter field should be initialized value");
        expect(filterItem.value).to.be.equal("Value1", "filter value should be initialized value");
    });

    it('evaluate', function() {
        const result = filterItem.evaluate(null);
        expect(result).to.be.true;
    })
});