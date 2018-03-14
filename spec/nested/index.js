const PARENT_MODULE = 'module-ffnkxro';
const CHILD_MODULE = 'module-ouxwqly';

module.exports = {
    require_parent: require.resolve(PARENT_MODULE),
    require_child: require.resolve(PARENT_MODULE),
    parent(string) {
        return require(PARENT_MODULE)(string);
    },
    child(string) {
        return require(CHILD_MODULE)(string);
    },
    parent_limited(string) {
        require('../../')(__dirname);
        return require(PARENT_MODULE)(string);
    },
    child_limited(string) {
        require('../../')(__dirname);
        return require(CHILD_MODULE)(string);
    }
};
