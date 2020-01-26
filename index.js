module.exports = function pipeline(input) {
  for (var i = 1; i < arguments.length; i++) {
    input = arguments[i](input)
  }
  return input
}
