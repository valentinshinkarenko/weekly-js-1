  //Вытащить все цифры из строк например "фыов33рыфвр" результатом должно быть 33

  var string = "фыов33рыфвр"
  var elementofstring = 0
  var res = ""
  do { 
    if (string[elementofstring]  >= 0) {
    //console.log(string[elementofstring]); 
      res = res + string[elementofstring]
  }
    elementofstring ++ 
  } 
  while (elementofstring  < string.length);
  console.log(res);