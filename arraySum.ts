function arraySum(arr:Array<number>):number {
    let sum = 0;
    for(const num of arr) {
        sum += num;
    }

    return sum;
}

let array:Array<number> = [1, 2, 3, 4];
console.log(`sum of array [${array}] is ${arraySum(array)}`);