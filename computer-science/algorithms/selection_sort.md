# Selection Sort

Sorts an array.

### Pseudo code

1. Find the minimum value in the array.
2. Swap it for the first item.
3. Find the minimum value in the rest of the array.
4. Swap it for the second item.
5. Repeat until reaching the last slot.


## Asymptotic analysis

O($$n^2$$)


## Example code

```javascript
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var index;
    for (var i = 0; i < array.length; i++) {
        index = indexOfMinimum(array, i);
        swap(array, i, index);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array2 = [22, 11, 0, 88, -9, 7, 42];
selectionSort(array2); 
Program.assertEqual(array2, [-9, 0, 7, 11, 22, 42, 88]);

```