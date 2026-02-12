import {isTruthyArray} from './isTruthyArray';

function arraySum(arr:Array<number>):number {
    let sum = 0;
    for(const num of arr) {
        sum += num;
    }

    return sum;
}

let array:Array<any> = [1, 2, 4, 5, 4];
if(isTruthyArray(array)) {
    console.log(`sum of array [${array}] is ${arraySum(array)}`);
} else {
    console.log(`the array [${array}] has some falsy items`);
}