const {expect} = require('chai');
const PACKAGE_ROOT = './spec/nested';

const {
    parent,
    child
} = require(PACKAGE_ROOT);

describe('dont-look-up from the outside', () => {
    it('module lookup finds modules in node_modules directory', () => {
        expect(child('message')).to.equal('echo message');
    });

    it('module lookup *does not* traverse up the file system', () => {
        require('./')(PACKAGE_ROOT);
        expect(() => parent('message')).to.throw();
    });
});
