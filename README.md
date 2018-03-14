# don't look up

[![NPM](https://nodei.co/npm/dont-look-up.png)](https://www.npmjs.com/package/dont-look-up)


## Stop requirejs from traversing at a certain point

> Whatever you do — don't look up

Stop requirejs' search path from looking higher than a given directory. This behaviour is should prevent your application from finding modules installed globally, or on a higher level directory, like in a mono-repo containing many packages.

```js
describe('my-tests', () => {
    require('dont-look-up')(__dirname);

    it('should not traverse beyond this directory', () => { ... });
});
```

### Example

Consider the following tree

```
└── repository
    ├── package
    │   ├── index.js
    │   ├── package.json
    │   └── node_modules
    │       └── child-level-module
    └── node_modules
        └── parent-level-module
```

#### package/index.js
```js
require('parent-level-module'); // works
require('child-level-module'); // works
```

With "don't look up"

```js
require('dont-look-up')(__dirname);
require('parent-level-module'); // throws error
require('child-level-module'); // works
```
