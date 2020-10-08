// [1,2,3,4, false] узнать сумму всех числе массива

var array = [1,2,3,4,false]
  var indexOfArray = 0
  var sum = 0
  do {
     sum = sum + array[indexOfArray]
     indexOfArray ++
  } 
  while (indexOfArray < array.length -1)
   console.log(sum) 
