class Sorter {
  constructor() {
      // your implementation
      this.arr = [];
      this.comparator = (left, right) => left - right;
  }

  add(element) {
    // your implementation
      this.arr.push(element);
  }

  at(index) {
    // your implementation
      return this.arr[index];
  }

  get length() {
    // your implementation
      return this.arr.length;
  }

  toArray() {
    // your implementation
      return this.arr;
  }

  sort(indices) {
    // your implementation
      var myArr = [];
      for(var i = 0; i < indices.length; i++) {
          myArr.push(this.arr[indices[i]]);
      }
          indices.sort();
          myArr.sort(this.comparator);
          for (var j = 0; j < indices.length; j++){
              this.arr[indices[j]] = myArr[j];
          }
  }

  setComparator(compareFunction) {
    // your implementation
          this.comparator  = compareFunction;
  }
}

module.exports = Sorter;