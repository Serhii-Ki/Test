Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue || this[0];
  let startIndex = initialValue ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }

  return acc;
};
const arr = [1, 2, 3, 4];
console.log(arr.myReduce((acc, item) => acc + item));
