// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
    // ================= code goes here ===========================


    for ( i = arr.length - 1; i >= 0; i--) {
        for ( j = 1; j <= i; j++) {
            if (arr[j - 1] < arr[j]) {
                var number = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = number;
            }
        }
    }
    return arr;







    // ============================================================
}

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);