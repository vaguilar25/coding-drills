//  YOUR WORK HERE
var arrayNum = [1,2,3,4];
var num = 2;



var temparray;
var final=[];
for (var i = 0; i < arrayNum.length; i += num) {
    temparray = arrayNum.slice(i, i + num);
    final.push(temparray);
}
console.log(final);