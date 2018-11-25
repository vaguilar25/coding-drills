// Lets build another bubble sort with a while loop instead of nested for loops

// Define a boolean outside your while loop to track if an element has been swapped

// the while loop should contain the for loop that iterates through the array and 
// continue until you've been able to iterate through the array without swapping 
// any elements


function bubbleSortTwo(arr) {
    // ================= code goes here ===========================



    var unsortedArr = arr;
    var swapped=true;
    do {
        swapped=false;
        for (i = 0; i < unsortedArr.length-1; i++) {
            //store the value of the first position]\
            //temp = unsortedArr[i+1];
            //compare the value with the next position
            //console.log("temp: " + temp);
            if (unsortedArr[i] > unsortedArr[i + 1]) {
                //if it is >, then swap positions
                var temp = unsortedArr[i];
                unsortedArr[i] = unsortedArr[i+1];

                unsortedArr[i + 1] = temp;
                
                swapped = true;
            }
            //console.log("array:" + unsortedArr);
        }
       

       // console.log("Aray: " + unsortedArr);
    } while (swapped);
return unsortedArr;







    // ============================================================
}


var age = [34, 23, 3, 76, 20, 84, 18, 9];
var newAge = bubbleSortTwo(age);
console.log(newAge)
