const { Module } = require('module');
const { dirname, resolve } = require('path');
const _resolveLookupPaths = Module._resolveLookupPaths;

module.exports = (directory = dirname(module.parent.filename)) => {
    const dir = resolve(directory);

    Module._resolveLookupPaths = function(name, module, ...rest) {

        module.paths = module.paths.filter(path => path.includes(dir));

        return _resolveLookupPaths.call(this, name, module, ...rest); // Prevent traversing up beyond this point
    }
};
