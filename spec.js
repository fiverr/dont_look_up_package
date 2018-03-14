const {expect} = require('chai');
const PACKAGE_ROOT = './spec/nested';

const {
    require_parent,
    require_child,
    parent,
    child,
    parent_limited,
    child_limited,
} = require(PACKAGE_ROOT);

describe('dont-look-up', () => {
    beforeEach(() => {
        delete require.cache[require_parent];
        delete require.cache[require_child];
    });

    it('module lookup finds modules in node_modules directory', () => {
        expect(child('message')).to.equal('echo message');
    });

    it('module lookup traverses up the file system', () => {
        expect(parent('message')).to.equal('echo message');
    });

    it('module lookup finds modules in node_modules directory', () => {
        expect(child_limited('message')).to.equal('echo message');
    });

    it('module lookup *does not* traverse up the file system', () => {
        expect(() => parent_limited('message')).to.throw();
    });
});
