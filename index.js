module.exports = function parseWarningHeader (header) {
  if (!header || typeof header !== 'string') return []
  var warnings = header.split(/([0-9]{3} [a-z0-9.@\-\/]*) /g)

  var previous
  function generateObject (all, w) {
    w = w.trim()
    var newError = w.match(/^([0-9]{3}) (.*)/)
    if (newError) previous = {code: newError[1], agent: newError[2]}
    else if (w) {
      var errorContent = w.split(/" "/)
      if (errorContent) {
        previous.message = strip(errorContent[0])
        previous.date = strip(errorContent[1])
        all.push(previous)
      }
    }
    return all
  }

  return warnings.reduce(generateObject, [])
}

function strip (s) {
  if (!s) return
  return s.replace(/(^"|[",]*$)/, '')
}
