import {expect} from 'chai';
import 'aurelia-polyfills';
import {AnalyticalDataManager} from './../../src/analytical/analytical-data-manager';

describe('AnalyticalDataManager Tests', function() {
    var analyticalDataManager;

    beforeEach(function() {
        analyticalDataManager = new AnalyticalDataManager ();
    });
    
    it('constructor', function() {
        expect(analyticalDataManager).to.not.be.null;
    });
})