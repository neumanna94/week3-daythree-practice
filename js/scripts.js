function cryptosquare(inputString){
  var stringLength=inputString.length;
  var mSide = Math.ceil(Math.pow(stringLength,.5));
  var outputMatrix = matrixCreate(mSide, mSide);
  var currentRow = 0;
  for(var i = 0; i < stringLength; i ++){
    if((i%mSide===0)&&(i!=0)){
      currentRow++;
    }
    outputMatrix[currentRow][i%mSide] = inputString[i];
  }
  return outputMatrix;
}
function matrixCreate(rows, columns){
  var outMatrix = [];
  for(var i =0; i < rows; i++){
    outMatrix.push([]);
    for(var j=0; j < columns; j++){
      outMatrix[i][j] = null;
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
    if(inputBinary[i]==1){
      outputSum += Math.pow(2,tracker);
    } else {

    }
    tracker++;
  }
  return outputSum;
}
function decimalToHexidecimal(inputDecimal){
  var quotient = (inputDecimal/16);
  var remainder = quotient*16 - Math.floor(quotient)*16;
  var hexidecimalOutput = "";
  hexidecimalOutput += hexidecimalLookUp(remainder);
  quotient = Math.floor(quotient);
  while(quotient > 0 ){
    quotient = quotient/16;
    remainder = quotient*16 - Math.floor(quotient)*16;
    quotient = Math.floor(quotient);
    hexidecimalOutput = hexidecimalLookUp(remainder) + hexidecimalOutput;
  }
  return hexidecimalOutput.toString();
}
function hexidecimalLookUp(input){
  if(input == 10){
    input = "A";
  } else if(input == 11){
    input = "B";
  } else if(input == 12){
    input = "C";
  } else if(input == 13){
    input = "D";
  } else if(input == 14){
    input = "E";
  } else if(input == 15){
    input = "F";
  } else {
    input = input;
  }
  return input;

}
function tester(){
  for(var i = 0; i <= 100; i++){
    console.log("Decimal: " + i + " Hexidecimal: " + decimalToBinary(i));
  }
}
