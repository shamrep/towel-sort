
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (!matrix || matrix.length === 0) {
    return [];
  }

  return matrix.reduce((result, row, index) => {
    if (index % 2 === 0) {
      return result.concat(row);
    } else {
      return result.concat(row.reverse());
    }
  }, []);
}
