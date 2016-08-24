var assert = require('assert')
var parse = require('./')

var warning = parse('199 agent "Error message" "2015-01-01"')
assert.equal(warning.length, 1)
var w = warning[0]
assert.deepEqual(w, {code: '199', agent: 'agent', message: 'Error message', date: '2015-01-01'})

var warnings = parse('199 agent "Error message" "2015", 299 agent2 "Error message 2 with \\" quote" "2016"')
assert.equal(warnings.length, 2)
assert.deepEqual(warnings[0], {code: '199', agent: 'agent', message: 'Error message', date: '2015'})
assert.deepEqual(warnings[1], {code: '299', agent: 'agent2', message: 'Error message 2 with \\" quote', date: '2016'})

// HTTP-Date format support https://tools.ietf.org/html/rfc7231#section-7.1.1.1
var httpDate = parse('199 agent "Error message" "Sun, 06 Nov 1994 08:49:37 GMT"')
assert.deepEqual(httpDate[0], {code: '199', agent: 'agent', message: 'Error message', date: 'Sun, 06 Nov 1994 08:49:37 GMT'})
