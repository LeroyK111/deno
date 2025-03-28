// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 20.11.1
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';

const common = require('../common');
const assert = require('assert');
const stream = require('stream');

const r = new stream.Readable({
  read: () => {}
});

// readableListening state should start in `false`.
assert.strictEqual(r._readableState.readableListening, false);

r.on('readable', common.mustCall(() => {
  // Inside the readable event this state should be true.
  assert.strictEqual(r._readableState.readableListening, true);
}));

r.push(Buffer.from('Testing readableListening state'));

const r2 = new stream.Readable({
  read: () => {}
});

// readableListening state should start in `false`.
assert.strictEqual(r2._readableState.readableListening, false);

r2.on('data', common.mustCall((chunk) => {
  // readableListening should be false because we don't have
  // a `readable` listener
  assert.strictEqual(r2._readableState.readableListening, false);
}));

r2.push(Buffer.from('Testing readableListening state'));
