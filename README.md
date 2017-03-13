# warning-header-parser

[![Greenkeeper badge](https://badges.greenkeeper.io/marcbachmann/warning-header-parser.svg)](https://greenkeeper.io/)

Parses an http `Warning` header. https://tools.ietf.org/html/rfc7234#section-5.5

```javascript
var parse = require('warning-header-parser')
parse('199 agent "Error message" "2015-01-01"')
// returns
[{
  code: '199',
  agent: 'agent',
  message: 'Error message',
  date: '2015-01-01'
}]

// Supports comma delimited warnings
parse('199 agent "Error message" "2015", 299 agent2 "Error message 2 with \" quote" "2016"')
```
