function reduce() {
    var boxarts = [{
        width: 200,
        height: 200
      }, {
        width: 150,
        height: 200
      }, {
        width: 300,
        height: 200
      }, {
        width: 425,
        height: 150
      }],
      currentSize,
      maxSize = -1,
      largestBoxart;
  
    boxarts.forEach(function(boxart) {
      currentSize = boxart.width * boxart.height;
      if (currentSize > maxSize) {
        largestBoxart = boxart;
        maxSize = currentSize;
      }
    });
  
    return largestBoxart;
  }
  
  console.log(reduce()); // {width: 425, height: 150}
  
  