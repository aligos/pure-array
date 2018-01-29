function remove(array, param) {
  const index = array.indexOf(param);
  array.splice(index, 1);
}

module.exports = function(array, param) {
  array.indexOf(param) === -1 ? array.push(param) : remove(array, param);
  return array;
};
