function cryptosquare(inputString){
  var stringLength=inputString.length;
  var rows=0;
  var columns=0;
  var count=0;
  if(stringLength%Math.pow(stringLength,.5)===0){
    rows = Math.pow(stringLength,.5);
    columns = rows;
  } else {
    rows = 9;
    columns = stringLength/9;
  }
  var outputArray = matrixCreate(rows, columns);
  for(var i = 0; i < rows; i ++){
    for(var j = 0; j < columns; j ++){
      outputArray[i,j] = inputString[count];
      count++;
    }
  }
  return outputArray[0][0];
}

function matrixCreate(rows, columns){
  var outMatrix = [];
  for(var i =0; i <rows; i++){
    outMatrix[i] = [];
    for(var j=0; j < columns; j++){
      outMatrix[i][j]="-";
    }
  }
  return outMatrix;
}
