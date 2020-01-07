module.exports = { sum };


function sum(params) {
  var a = 0;
  for (let index = 0; index < arguments.length; index++) {
    a += arguments[index];
  }
  return a;
}

