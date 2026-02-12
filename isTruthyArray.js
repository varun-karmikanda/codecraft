function isTruthyArray(arr) {
    return arr.every(function (item) { return item; });
}
var arr = [1, 2, 3, 4, 6, ""];
console.log(isTruthyArray(arr));
