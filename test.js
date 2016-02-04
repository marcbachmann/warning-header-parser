var assert = require('assert')
var parse = require('./')

var warning = parse('199 agent "Error message" "2015-01-01"')
assert.equal(warning.length, 1)
var w = warning[0]
assert.deepEqual(w, {code: '199', agent: 'agent', message: 'Error message', date: '2015-01-01'})


var warnings = parse('199 agent "Error message" "2015", 299 agent2 "Error message 2 with \" quote" "2016"')
assert.equal(warnings.length, 2)
assert.deepEqual(warnings[0], {code: '199', agent: 'agent', message: 'Error message', date: '2015'})
assert.deepEqual(warnings[1], {code: '299', agent: 'agent2', message: 'Error message 2 with \" quote', date: '2016'})
