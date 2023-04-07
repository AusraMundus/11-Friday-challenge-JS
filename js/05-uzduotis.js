console.clear();

/*
5. Parašyti f-ją, kuri nustatytų ar du paduodami argumentai yra lygūs. Gražiname true arba false

TEST:
isSameNum(4, 8) ➞ false
isSameNum(2, 2) ➞  true
isSameNum(2, "2") ➞ false
*/

function isSameNum(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(2, '2'));

const a = 4;
const b = 8;
console.log(`Ar ${a} yra lygus ${b}? Atsakymas: ${isSameNum(a, b)}`);