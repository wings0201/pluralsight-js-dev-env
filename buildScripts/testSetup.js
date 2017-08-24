// this file is not transpiled, so must use commonJS and ES5

// register babel to transpile before tests run
require("babel-register")();

// disable webpack features that Mocha does not understand
require.extensions['.css'] = function(){};
