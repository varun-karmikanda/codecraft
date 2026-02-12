function isTitle(sentence:string):boolean {
    let words:Array<string> = sentence.split(" ");

    for(const word of words) {
        if(word[0] !== word[0].toUpperCase())
            return false;
    }

    return true;
}

let sentence = "Hello world";
if(isTitle(sentence)) {
    console.log(`"${sentence}" is in title case`);
} else {
    console.log(`"${sentence}" is not in title case`);
}

/**
 * Steps to run manually
 * npx tsc isTitle.ts
 * node isTitle.js
 */