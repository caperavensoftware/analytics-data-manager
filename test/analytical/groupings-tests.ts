import {expect} from 'chai';
import 'aurelia-polyfills';
import {Groupings, Grouping} from './../../src/analytical/groupings';

describe('Groupings Tests', function() {
    var groupings;

    beforeEach(function() {
        groupings = new Groupings ();
    });
    
    it('constructor', function() {
        expect(groupings).to.not.be.null;
        expect(groupings.groupings).not.to.be.null;
    });

    it('add', function() {
        // Arrange
        const grouping = new Grouping("field1", "Field 1");

        // Act
        groupings.add(grouping);

        // Assert
        expect(groupings.groupings.length).to.equal(1, "groupings should have one item");
    });

    it('insert');
    it('remove');
    it('removeAt');
    it('move');
});