function remove(array, param) {
  const index = array.indexOf(param);
  array.splice(index, 1);
}

function isExist(array, param) {
  return array.indexOf(param) !== -1;
}

module.exports = function(array, param) {
  isExist(array, param) ? remove(array, param) : array.push(param);
  return array;
};
