
// You should implement your task here.

module.exports = function towelSort (matrix = []) {

  let array = matrix.map((a, i) => {
  if ((i + 1) % 2 === 0) {
    return a.reverse();
  } else {return a}
})
  return array.flat();
}

