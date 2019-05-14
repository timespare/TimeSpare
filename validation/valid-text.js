const validText = str => {
  debugger
  return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validText;