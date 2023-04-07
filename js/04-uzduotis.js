/*
4. Parašyti f-ją, kuriai būtų paduodami du parametrai (skaičiai), ir f-ja gražintų true  jei dviejų skaičių
sumą yra mažiau arba lygų 100 ir false jei daugiau už 100. 

TEST:
lessThan100(22, 15) ➞ true
lessThan100(83, 34) ➞ false
lessThan100(3, 77) ➞ true
*/

function lessThan100 (a, b) {
    const sum = a + b;
    if (sum <= 100) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

const a = 22;
const b = 15;
console.log(`Ar ${a} ir ${b} suma yra mažiau arba lygu 100? Atsakymas: ${lessThan100(a, b)}.`);