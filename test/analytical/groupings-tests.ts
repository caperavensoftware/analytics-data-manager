import {expect} from 'chai';
import 'aurelia-polyfills';
import {Groupings} from './../../src/analytical/groupings';

describe('Groupings Tests', function() {
    var groupings;

    beforeEach(function() {
        groupings = new Groupings ();
    });
    
    it('constructor', function() {
        expect(groupings).to.not.be.null;
    });
})