function forLoop(array) {
  for (var i = 0; i<25; i++) {
    array.push("I am " + i + " strange loops.")
  }
}

function whileLoop(number) {
  while (number > 0) {
    console.log(number--);
  }
  return 'done'
}

function doWhileLoop(array) {
  var i = 0
  do {
    array.pop()
  } while (array.length > 0 && incrementVariable());
  return array
}

function incrementVariable() {
  i = i + 1;
}
