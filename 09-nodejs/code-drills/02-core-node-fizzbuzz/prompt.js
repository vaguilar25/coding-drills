
function fizzBuzz(num) {

    var array = [];

    for (var i = num; i > 0; i--) {
        array.push(i);
    }
    console.log(array);
    array.reverse();    
    for (i=0; i<array.length;i++ ) {
        // ===================== YOUR WORK HERE =====================
        let num = array[i]; 
        if (((num % 3) === 0) && (((num % 5) === 0))) {
            console.log("fizzbuzz");
        } else if ((num % 3) === 0) {
            console.log("fizz");
        } else if ((num % 5) === 0) {
            console.log("buzz");
        } else {
            console.log( num);
          }

    }
    // ==========================================================
}
fizzBuzz(process.argv[2]);

