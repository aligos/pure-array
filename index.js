function remove(array, param) {
  const index = array.indexOf(param);
  array.splice(index, 1);
}

function isExist(array, param) {
  return array.indexOf(param) !== -1;
}

module.exports = {
  PureAll: function(array, inputArray) {
    let newArray = array.length === 0 ? array.concat(inputArray) : [];
    return newArray;
  },

  Pure: function(array, param) {
    isExist(array, param) ? remove(array, param) : array.push(param);
    return array;
  }
};
