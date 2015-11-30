'use strict';

/* Binary search number algorithm */

let i = 0;

const binarySearch = ({ array, head = 0, number, tail }) => {

    if (i > 10) return 'stack overflow'; i += 1;

    tail = tail || array.length;

    const remainingArray = array.slice(head, tail);

    const index = Math.floor(remainingArray.length / 2);

    const normalizedIndex = head + index;

    if (remainingArray[index] === number) {
        console.log('found in index ', normalizedIndex);

        return normalizedIndex;
    }

    if (number < remainingArray[index]) {
        tail = normalizedIndex;
    } else {
        head = normalizedIndex;
    }

    console.log('head', head, 'tail', tail, remainingArray, 'index', normalizedIndex);

    return binarySearch({ array, head, number, tail });
};

// Tests
let array;

array = [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150];
console.log(binarySearch({ array, number: 20 }) );
i = 0;

console.log(binarySearch({ array, number: 70 }) );
i = 0;

console.log(binarySearch({ array, number: 130 }) );
i = 0;

console.log(binarySearch({ array, number: 0 }) );
i = 0;

array = [0,1,2,3,4,5];
console.log(binarySearch({ array, number: 5 }) );

array = [0,1,2,3,4,5,6];
console.log(binarySearch({ array, number: 4 }) );
