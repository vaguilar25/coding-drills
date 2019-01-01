//  YOUR WORK HERE
var inquirer = require('inquirer');

inquirer.prompt([
    {
      type: 'Input',
      name: 'number',
      message: 'Enter a number',
     

    },

  ]).then(function (inputNumber) {

    returnNumber(inputNumber.number);
    
  })

function returnNumber(number) {
    var numberArrays = number.split('')
    var sum =0;
    console.log(numberArrays);
    numberArrays.forEach(function(element) {
        sum+=parseInt(element);
    });
    console.log(sum);
    return (checkLength(sum));

}

function checkLength(num){
  
    if (num.toString().length >1) {
        returnNumber(num.toString());
    } else {
        return num;
    }
}