"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isTruthyArray_1 = require("./isTruthyArray");
function arraySum(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    return sum;
}
var array = [1, 2, 4, 5, 4];
if ((0, isTruthyArray_1.isTruthyArray)(array)) {
    console.log("sum of array [".concat(array, "] is ").concat(arraySum(array)));
}
else {
    console.log("the array [".concat(array, "] has some falsy items"));
}
