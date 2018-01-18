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
function decimalToBinary(inputDecimal){
  var quotient = (inputDecimal/2);
  var remainder = quotient*2 - Math.floor(quotient)*2;
  var binaryOutput = "";
  binaryOutput += remainder;
  quotient = Math.floor(quotient);
  while(quotient > 0 ){
    quotient = quotient/2;
    remainder = quotient*2 - Math.floor(quotient)*2;
    quotient = Math.floor(quotient);
    binaryOutput = remainder + binaryOutput;
  }
  return binaryOutput.toString();
}
function binaryToDecimal(inputBinary){
  var arrLength = inputBinary.length;
  var outputSum = 0;
  var tracker = 0;
  for(var i = arrLength-1; i >= 0; i--){
    console.log(inputBinary[i] + ", " + tracker);
    if(inputBinary[i]==1){
      outputSum += Math.pow(2,tracker);
    } else {

    }
    tracker++;
  }
  return outputSum;
}
function decimalToHexidecimal(inputDecimal){

}

function tester(){
  for(var i = 0; i <= 100; i++){
    console.log("Decimal: " + i + " Binary Equiv: " + decimalToBinary(i));
  }
}
