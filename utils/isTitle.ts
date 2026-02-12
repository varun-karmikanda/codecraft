export function isTitle(sentence:string):boolean {
    let words:Array<string> = sentence.split(" ");

    for(const word of words) {
        if(word[0] !== word[0].toUpperCase())
            return false;
    }

    return true;
}

/**
 * Steps to run manually
 * npx tsc isTitle.ts
 * node isTitle.js
 */