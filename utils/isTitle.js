function isTitle(sentence) {
    var words = sentence.split(" ");
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word[0] !== word[0].toUpperCase())
            return false;
    }
    return true;
}
var sentence = "Hello world";
if (isTitle(sentence)) {
    console.log("\"".concat(sentence, "\" is in title case"));
}
else {
    console.log("\"".concat(sentence, "\" is not in title case"));
}
/**
 * Steps to run manually
 * npx tsc isTitle.ts
 * node isTitle.js
 */ 
