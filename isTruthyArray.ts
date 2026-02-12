/**
 * 
 * @param arr 
 * @returns 
 */


function isTruthyArray(arr:Array<any>):boolean {
    return arr.every(item => item)
}

let arr:Array<any> = [1, 2, 3, 4, 6, ""]

console.log(isTruthyArray(arr));