const foo = require("./foo");
const bar = require("./bar");

function baz(f) {
  bar(f);
}

baz(foo);
