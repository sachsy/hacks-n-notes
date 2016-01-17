# Insertion Sort

This algorithm sorts by inserting in the list. 
## Pseudocode

It works like a poker player would handle cards as he receives them from the dispatcher. 

1. He would get an initial card.
1. He would get a second card and shuffle so he has them in order.
1. The third card he gets he puts it at the end of the stack. 
1. Then goes inserting it to the left until it reaches the slot where there is no card with less value.
1. Repeats the same algorithm with the next cards.


## Asymptotic Analysis

## Implementation
```javascript
var insert = function(array, rightIndex, value) {
    for(var j = rightIndex;
        j >= 0 && array[j] > value;
        j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value; 
};

var insertionSort = function(array) {
    for(var i = 0; i < array.length - 1; i++) {
        insert(array, i, array[i + 1]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);


var array2 = [100, 3300, -3, 0, 40, -34, 0];
insertionSort(array2);
println("Array after sorting:  " + array2);
Program.assertEqual(array2, [-34,-3,0,0,40,100,3300]);
```