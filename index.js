const { Module } = require('module');
const { dirname, resolve } = require('path');

/**
 * A copy of the original functionality
 * @type {function}
 */
const _resolveLookupPaths = Module._resolveLookupPaths;

/**
 * [exports description]
 * @param  {string} [directory=dirname(module.parent.filename)] directory that is the limit for lookup
 * @return {undefined}                                          no return value
 */
module.exports = (directory = dirname(module.parent.filename)) => {
    const dir = resolve(directory);

    /**
     * Filters out any paths that are higher than current directory, relays functionality to original method
     * @param  {string} name
     * @param  {array}  module
     * @param  {...any} ...rest
     * @return {array}
     */
    Module._resolveLookupPaths = function(name, module, ...rest) {
        module.paths = module.paths.filter((path) => path.includes(dir));

        return _resolveLookupPaths.call(this, name, module, ...rest); // Prevent traversing up beyond this point
    };
};
