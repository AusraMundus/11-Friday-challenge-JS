/* 
1. Parašyti f-ją, kuriai būtų perduodamas vienas parametras skaičius, kuris
padidinamas vienetu ir gražinamas rezultatas

TEST:
addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2

*/

function addition(skaicius) {
    return skaicius + 1;
}

console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));

const a = 0;
console.log(`Skaičius ${a} padidinamas vienu vienetu ir gaunamas rezultatas: ${addition(a)}.`);