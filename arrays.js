var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  [element, ...array]
  return newarray = [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
return dosarray = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element)
 return array
}
