import {expect, assert} from 'chai';
import * as sinon from 'sinon';
import 'aurelia-polyfills';
import {AnalyticalDataManager} from './../../src/analytical/analytical-data-manager';

describe('AnalyticalDataManager Tests', function() {
    var analyticalDataManager;

    beforeEach(function() {
        analyticalDataManager = new AnalyticalDataManager ();
    });
    
    it('constructor', function() {
        expect(analyticalDataManager).to.not.be.null;
        expect(analyticalDataManager.groupingOrder).to.not.be.null;
        expect(analyticalDataManager.sortingOrder).to.not.be.null;
    });

    it('setData', function() {
        // Arrange
        const groupingOrderSpy = sinon.spy(analyticalDataManager.groupingOrder, "validateFromModel");
        const sortingOrderSpy = sinon.spy(analyticalDataManager.sortingOrder, "validateFromModel");
        
        const model = {
            field1: "abc"
        }

        // Act
        analyticalDataManager.setData([model]);

        // Assert
        assert(groupingOrderSpy.withArgs(model).calledOnce, 'groupingOrder validateFromModel should have been called once');
        assert(sortingOrderSpy.withArgs(model).calledOnce, 'sortingOrder validateFromModel should have been called once');
    })
});