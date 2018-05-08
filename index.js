function remove(array, param) {
  const index = array.indexOf(param);
  array.splice(index, 1);
}

function isExist(array, param) {
  return array.indexOf(param) !== -1;
}

function includes(array, obj) {
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === obj) {
      return true;
    }
  }

  return false;
}

module.exports = {
  PureAll: function(array, inputArray) {
    let newArray = array.length === 0 ? array.concat(inputArray) : [];
    return newArray;
  },

  Pure: function(array, param) {
    if (typeof param === "object") {
      includes(array, param) ? remove(array, param) : array.push(param);
    } else {
      isExist(array, param) ? remove(array, param) : array.push(param);
    }
    return array;
  }
};
