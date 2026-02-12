/**
 * 
 * @param arr 
 * @returns 
 */


export function isTruthyArray(arr:Array<any>):boolean {
    return [...arr].every(Boolean)
}